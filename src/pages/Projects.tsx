
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Modern Family Home',
      category: 'Residential',
      location: 'San Francisco, CA',
      description: 'Complete custom home construction featuring modern design elements and sustainable materials.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop',
      details: ['3,500 sq ft', '4 Bedrooms', '3.5 Bathrooms', 'Completed 2023']
    },
    {
      title: 'Downtown Office Building',
      category: 'Commercial',
      location: 'Oakland, CA',
      description: 'Multi-story office building renovation with modern amenities and energy-efficient systems.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop',
      details: ['15,000 sq ft', '3 Floors', 'LEED Certified', 'Completed 2023']
    },
    {
      title: 'Luxury Kitchen Remodel',
      category: 'Remodeling',
      location: 'Palo Alto, CA',
      description: 'High-end kitchen renovation with custom cabinetry, premium appliances, and marble countertops.',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop',
      details: ['400 sq ft', 'Custom Cabinets', 'Marble Counters', 'Completed 2024']
    },
    {
      title: 'Historic Home Restoration',
      category: 'Restoration',
      location: 'Sausalito, CA',
      description: 'Careful restoration of a 1920s Victorian home preserving original character while adding modern amenities.',
      image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=600&h=400&fit=crop',
      details: ['2,800 sq ft', 'Historic Preservation', '3 Bedrooms', 'Completed 2023']
    },
    {
      title: 'Retail Space Buildout',
      category: 'Commercial',
      location: 'Berkeley, CA',
      description: 'Complete buildout of retail space including custom fixtures, lighting, and storefront improvements.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop',
      details: ['2,200 sq ft', 'Custom Fixtures', 'New Storefront', 'Completed 2024']
    },
    {
      title: 'Contemporary Addition',
      category: 'Residential',
      location: 'Mill Valley, CA',
      description: 'Modern two-story addition seamlessly integrated with existing home architecture.',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop',
      details: ['1,200 sq ft', '2 Stories', 'Master Suite', 'Completed 2024']
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Remodeling', 'Restoration'];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Explore our portfolio of successful construction projects across California.
              </p>
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                <div className="text-gray-700">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                <div className="text-gray-700">Team Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600">A showcase of our recent construction achievements</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">{project.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                      {project.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-1 h-1 bg-amber-600 rounded-full mr-2"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex text-amber-400 mb-2">
                      {'★'.repeat(5)}
                    </div>
                    <p className="text-gray-600 italic">
                      "CaliBuild Pro exceeded our expectations. The quality of work and attention to detail was outstanding."
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Homeowner, San Francisco</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex text-amber-400 mb-2">
                      {'★'.repeat(5)}
                    </div>
                    <p className="text-gray-600 italic">
                      "Professional, reliable, and delivered on time. Our office renovation was seamless."
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mark Davis</div>
                    <div className="text-sm text-gray-500">Business Owner, Oakland</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex text-amber-400 mb-2">
                      {'★'.repeat(5)}
                    </div>
                    <p className="text-gray-600 italic">
                      "From design to completion, the team was fantastic. Highly recommend CaliBuild Pro!"
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Lisa Chen</div>
                    <div className="text-sm text-gray-500">Homeowner, Berkeley</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Project?</h2>
            <p className="text-xl mb-8">
              Let's discuss how we can bring your construction vision to life.
            </p>
            <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
