
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes, additions, and residential renovations tailored to your lifestyle.',
      features: ['Custom Home Building', 'Room Additions', 'Whole House Renovations', 'Basement Finishing'],
      price: 'Starting at $150/sq ft'
    },
    {
      title: 'Commercial Construction',
      description: 'Professional commercial building services for businesses of all sizes.',
      features: ['Office Buildings', 'Retail Spaces', 'Restaurants', 'Tenant Improvements'],
      price: 'Custom Pricing'
    },
    {
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into the heart of your home with our expert design and construction.',
      features: ['Custom Cabinetry', 'Countertop Installation', 'Plumbing & Electrical', 'Complete Design Service'],
      price: 'Starting at $25,000'
    },
    {
      title: 'Bathroom Remodeling',
      description: 'Create a luxurious and functional bathroom space that fits your needs.',
      features: ['Full Bathroom Renovation', 'Shower & Tub Installation', 'Tile Work', 'Accessibility Upgrades'],
      price: 'Starting at $15,000'
    },
    {
      title: 'Roofing Services',
      description: 'Protect your investment with professional roofing installation and repair services.',
      features: ['New Roof Installation', 'Roof Repairs', 'Gutter Installation', 'Emergency Services'],
      price: 'Starting at $8,000'
    },
    {
      title: 'Exterior Siding',
      description: 'Enhance your homes curb appeal and protection with quality siding installation.',
      features: ['Vinyl Siding', 'Fiber Cement', 'Wood Siding', 'Siding Repair'],
      price: 'Starting at $12,000'
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Comprehensive construction solutions delivered with expertise, quality, and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Services Include:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-amber-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <p className="text-lg font-semibold text-amber-600 mb-3">{service.price}</p>
                      <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600">How we bring your construction project to life</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600">Free initial consultation to understand your vision and requirements.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning & Design</h3>
                <p className="text-gray-600">Detailed planning, design development, and project timeline creation.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Construction</h3>
                <p className="text-gray-600">Professional construction with regular updates and quality control.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Completion</h3>
                <p className="text-gray-600">Final walkthrough, cleanup, and ongoing support for your project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and detailed quote for your construction project.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
