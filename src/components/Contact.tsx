import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Call Us
                  </h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-400">info@lasercleaning.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Service Area
                  </h3>
                  <p className="text-gray-400">Greater Metropolitan Area</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageCircle className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Quick Chat
                  </h3>
                  <div className="flex space-x-4">
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      WhatsApp
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Telegram
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
                ></textarea>
              </div>

              <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
