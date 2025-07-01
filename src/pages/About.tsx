
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: 'Mike Rodriguez',
      role: 'Founder & Lead Contractor',
      description: 'Licensed contractor with 20+ years of experience in residential and commercial construction.'
    },
    {
      name: 'Sarah Chen',
      role: 'Project Manager',
      description: 'Expert in project coordination and client relations, ensuring every project runs smoothly.'
    },
    {
      name: 'David Thompson',
      role: 'Master Carpenter',
      description: 'Skilled craftsman specializing in custom woodwork and precision construction.'
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1920&h=600&fit=crop)'
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About CaliBuild Pro</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Building trust, delivering excellence, and creating lasting relationships in California's construction industry.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2009, CaliBuild Pro began as a small family-owned construction company 
                    with a simple mission: to provide honest, reliable, and high-quality construction 
                    services to the communities we serve throughout California.
                  </p>
                  <p>
                    Over the years, we've grown from a two-person operation to a trusted team of 
                    skilled professionals, but we've never lost sight of our core values: integrity, 
                    craftsmanship, and customer satisfaction.
                  </p>
                  <p>
                    Today, we're proud to have completed over 500 successful projects, from custom 
                    homes to major commercial renovations, always with the same commitment to 
                    excellence that started it all.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                    <div className="text-gray-700">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                    <div className="text-gray-700">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                    <div className="text-gray-700">Licensed & Insured</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
                    <div className="text-gray-700">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to bringing your vision to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-2xl font-bold text-amber-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-white font-bold text-xl">Q</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every project receives our full attention 
                  to detail and commitment to excellence.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-white font-bold text-xl">I</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Honest communication, transparent pricing, and ethical business practices 
                  are the foundation of our relationships.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-white font-bold text-xl">S</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We go above and beyond to exceed 
                  expectations on every project.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
