class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  has_many :posts, dependent: :destroy

  validates :email, presence: true, uniqueness: { case_sensitive: false },
            format: { with: URI::MailTo::EMAIL_REGEXP, message: "Must be a valid email address" }

  validates :name, presence: true, length: { minimum: 3, maximum: 20 }
  validates :nickname, presence: true, uniqueness: true

  before_validation :generate_unique_nickname, on: :create

  private

  def generate_unique_nickname
    base_nickname = generate_base_nickname
    self.nickname = ensure_unique_nickname(base_nickname)
  end

  def generate_base_nickname
    camelcase_name = name.split.map(&:capitalize).join
    "@#{camelcase_name}"
  end

  def ensure_unique_nickname(base_nickname)
    nickname = base_nickname
    counter = 1

    while User.exists?(nickname: nickname)
      nickname = "#{base_nickname}#{counter}"
      counter += 1
    end

    nickname
  end

end
