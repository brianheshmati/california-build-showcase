
import Layout from '@/components/Layout';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Residential', 'Commercial', 'Kitchen', 'Bathroom', 'Roofing'];
  
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      category: 'Residential',
      title: 'Modern Home Exterior',
      description: 'Contemporary home with clean lines and natural materials'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      category: 'Commercial',
      title: 'Office Building',
      description: 'Modern commercial construction project'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop',
      category: 'Kitchen',
      title: 'Luxury Kitchen',
      description: 'Custom kitchen with premium finishes'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=800&h=600&fit=crop',
      category: 'Residential',
      title: 'Historic Restoration',
      description: 'Careful restoration of historic property'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop',
      category: 'Commercial',
      title: 'Retail Space',
      description: 'Modern retail buildout with custom features'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop',
      category: 'Residential',
      title: 'Contemporary Addition',
      description: 'Seamless home addition with modern design'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Browse through our collection of completed construction projects showcasing our craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-amber-600 hover:bg-amber-700" 
                    : "hover:bg-amber-50 hover:text-amber-600 hover:border-amber-600"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-end">
                    <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block bg-amber-600 text-xs px-2 py-1 rounded-full mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No images found for the selected category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Before & After Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Before & After Transformations</h2>
              <p className="text-xl text-gray-600">See the dramatic transformations we've achieved</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop&brightness=0.7&contrast=0.8" 
                      alt="Before renovation"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop" 
                      alt="After renovation"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Kitchen Renovation</h3>
                  <p className="text-gray-600 text-sm">Complete kitchen transformation with modern appliances and custom cabinetry</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop&brightness=0.7&contrast=0.8" 
                      alt="Before renovation"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop" 
                      alt="After renovation"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                      AFTER
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Bathroom Remodel</h3>
                  <p className="text-gray-600 text-sm">Luxury bathroom upgrade with premium fixtures and modern design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Inspired by Our Work?</h2>
            <p className="text-xl mb-8">
              Let's discuss how we can transform your space with the same level of quality and craftsmanship.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                <a href="/projects">View All Projects</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;
