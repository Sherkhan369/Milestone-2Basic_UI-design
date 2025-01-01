import Image from "next/image";

export default function Services() {
    return (
      <div className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">
            Our Web Development & Design Services
          </h1>
  
          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Development Service */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
              <Image
                src={"/web.png"} 
                alt="Web Development"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-6">Web Development</h2>
              <p className="text-gray-600 mt-4">
                We create fast, scalable, and responsive websites tailored to your business needs.
                Whether you are looking for a simple landing page or a complex web app, we have got you covered.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>Custom Web Development</li>
                <li>Responsive Design</li>
                <li>Web Application Development</li>
                <li>API Integrations</li>
              </ul>
            </div>
  
            {/* Web Design Service */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
              <Image
                src={"/design.png"} 
                alt="Web Design"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-6">Web Design</h2>
              <p className="text-gray-600 mt-4">
                Our expert designers build aesthetically pleasing and user-friendly websites.
                We focus on delivering intuitive designs that improve user experience and drive conversions.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>Custom Web Design</li>
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>Wireframing & Prototyping</li>
              </ul>
            </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* SEO Optimization Service */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
              <Image
                src={"/seo.png"} 
                alt="SEO Optimization"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-6">SEO Optimization</h2>
              <p className="text-gray-600 mt-4">
                Our SEO experts ensure that your website ranks higher on search engines,
                helping you attract more visitors and convert them into customers.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>On-Page SEO</li>
                <li>Off-Page SEO</li>
                <li>Keyword Research</li>
                <li>Analytics & Reporting</li>
              </ul>
            </div>
  
            {/* E-commerce Solutions Service */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
              <Image
                src={"/image.png"} 
                alt="E-commerce Solutions"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mt-6">E-commerce Solutions</h2>
              <p className="text-gray-600 mt-4">
                We help you build a fully functional e-commerce platform to sell your products online.
                From setup to design and ongoing support, we provide complete e-commerce solutions.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>Custom E-commerce Development</li>
                <li>Payment Gateway Integration</li>
                <li>Product Catalog Management</li>
                <li>Shopify/WooCommerce Expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }