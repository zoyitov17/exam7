import React from 'react'

const Footer = () => {
  return (
    <div className="bg-green-900 text-white w-[100%] mt-[50px]">
      <div class="w-[90%] mx-auto my-0 pb-[15px] pt-[20px]">
        <footer class="py-10">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-between">
              <div class="mb-6">
                <h2 class="text-2xl font-bold">Game Geek</h2>
                <p class="mt-2 text-lg">
                  Start your <span class="text-green-400">game</span> with the
                  best
                </p>
                <div class="flex mt-4 space-x-4">
                  <a href="#" class="text-blue-400 hover:text-blue-500">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="text-blue-700 hover:text-blue-800">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#" class="text-blue-600 hover:text-blue-700">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="#" class="text-pink-500 hover:text-pink-600">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="mb-6">
                <h3 class="text-lg font-semibold">Services</h3>
                <ul class="mt-4 space-y-2">
                  <li>
                    <a href="#" class="hover:underline">
                      Gift Card
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Mobile App
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Shipping & Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Order Pickup
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Account Signup
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-6">
                <h3 class="text-lg font-semibold">Help</h3>
                <ul class="mt-4 space-y-2">
                  <li>
                    <a href="#" class="hover:underline">
                      ShopCart Help
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Track Orders
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Security & Fraud
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mb-6">
                <h3 class="text-lg font-semibold">About Us</h3>
                <ul class="mt-4 space-y-2">
                  <li>
                    <a href="#" class="hover:underline">
                      News & Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Help
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Press Center
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-10 border-t border-green-800 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
              <div class="flex space-x-6">
                <a href="#" class="hover:underline">
                  Help Center
                </a>
                <a href="#" class="hover:underline">
                  Privacy & Policy
                </a>
                <a href="#" class="hover:underline">
                  Terms of Service
                </a>
              </div>
              <div class="mt-4 md:mt-0">
                <p class="text-gray-400">
                  &copy; All rights reserved by{" "}
                  <span class="font-semibold">GameGeek</span> | 2023
                </p>
              </div>
            </div>
          </div>
        </footer>
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossorigin="anonymous"
        ></script>
      </div>
    </div>
  );
}   

export default Footer