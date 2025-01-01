

function Contact() {
    return (
        <div className="bg-gray-100 min-h-screen py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
              Get in Touch with Us
            </h1>
            
            <div className="flex justify-center">
              <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                <form>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
    
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                     
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your email address"
                      required
                    />
                  </div>
    
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                     
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Write your message here"
                      
                      required
                    />
                  </div>
    
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }


export default Contact