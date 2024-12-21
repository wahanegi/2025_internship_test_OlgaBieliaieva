require 'rails_helper'

RSpec.describe User, type: :model do
  let (:user) { described_class.new(name: "John", email: "john@gmail.com", password: "12345678") }
  let (:user_no_name) { described_class.new(email: "john@gmail.com", password: "12345678")  }
  let (:user_no_email) { described_class.new(name: "John", password: "12345678") }
  let (:user_no_password) { described_class.new(name: "John", email: "john@gmail.com") }
  let (:user_invalid_name) { described_class.new(name: "J", email: "john@gmail.com", password: "12345678") }
  let (:user_invalid_email) { described_class.new(name: "John", email: "john.gmail.com", password: "12345678") }

  it "is valid with valid attributes" do
    expect(user).to be_valid
  end

  it "is invalid without a name" do
    expect(user_no_name).not_to be_valid
  end

  it "is invalid without an email" do
    expect(user_no_email).not_to be_valid
  end

  it "is invalid without a password" do
    expect(user_no_password).not_to be_valid
  end

  it "is invalid with too short name" do
    expect(user_invalid_name).not_to be_valid
  end

  it "is invalid with incorrect email" do
    expect(user_invalid_email).not_to be_valid
  end
end
