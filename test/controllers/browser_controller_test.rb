require 'test_helper'

class BrowserControllerTest < ActionController::TestCase
  test "should get browser" do
    get :browser
    assert_response :success
  end

end
