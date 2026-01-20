import { useState } from 'react';
import { FileText, Download, X, CheckCircle, Eye } from 'lucide-react';

const Certificates = () => {
  // Certificate data with your image paths
  const certificates = [
    {
      id: 1,
      title: 'GEB Contractor License',
      description: 'Licensed contractor for Gujarat Electric Board',
      src: '/images/certificates/image.png',
      issuedBy: 'Gujarat Electricity Board',
      issueDate: '15 Jan 2023',
      validUntil: '14 Jan 2026',
      certificateNo: 'GEB/CNTR/2023/04567',
      category: 'License',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Electrical Safety Compliance',
      description: 'Safety compliance certificate',
      src: '/images/certificates/image copy.png',
      issuedBy: 'Electrical Inspectorate, Gujarat',
      issueDate: '22 Mar 2023',
      validUntil: '21 Mar 2026',
      certificateNo: 'EIC/GJ/2023/7890',
      category: 'Safety',
      status: 'Active'
    },
    {
      id: 3,
      title: 'RME Specialist Certification',
      description: 'Specialized in Ring Main Unit maintenance',
      src: '/images/certificates/image copy 2.png',
      issuedBy: 'National Power Training Institute',
      issueDate: '10 Aug 2022',
      validUntil: '09 Aug 2025',
      certificateNo: 'NPTI/RME/2022/1234',
      category: 'Training',
      status: 'Active'
    },
    {
      id: 4,
      title: 'ISO 9001:2015 Quality Management',
      description: 'Quality management system certification',
      src: '/images/certificates/image copy 3.png',
      issuedBy: 'Indian Register Quality Systems',
      issueDate: '05 Dec 2022',
      validUntil: '04 Dec 2025',
      certificateNo: 'IRQS/ISO/2022/5678',
      category: 'Quality',
      status: 'Active'
    },
    {
      id: 5,
      title: 'Industrial Electrical License',
      description: 'Industrial electrical work license',
      src: '/images/certificates/image copy 4.png',
      issuedBy: 'Government of Gujarat',
      issueDate: '30 Nov 2021',
      validUntil: '29 Nov 2024',
      certificateNo: 'GOG/IEL/2021/9012',
      category: 'License',
      status: 'Active'
    },
    {
      id: 6,
      title: 'Fire Safety Compliance',
      description: 'Fire safety and emergency compliance',
      src: '/images/certificates/image copy 5.png',
      issuedBy: 'Fire & Emergency Services, Gujarat',
      issueDate: '18 Sep 2023',
      validUntil: '17 Sep 2026',
      certificateNo: 'FES/GJ/2023/3456',
      category: 'Safety',
      status: 'Active'
    },
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  // Handle image error - show fallback
  const handleImageError = (e, cert) => {
    e.target.onerror = null;
    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f2f5'/%3E%3Crect x='50' y='50' width='300' height='200' rx='10' fill='white' stroke='%23d1d5db' stroke-width='2'/%3E%3Ccircle cx='200' cy='120' r='30' fill='%231B5E20'/%3E%3Ctext x='200' y='120' font-family='Arial' font-size='48' text-anchor='middle' fill='white' dy='.3em'%3E${cert.title.charAt(0)}%3C/text%3E%3Ctext x='200' y='180' font-family='Arial' font-size='16' text-anchor='middle' fill='%234b5563'%3E${cert.title}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <section id="certificates" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Certificates & Licenses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Licensed and certified by government authorities for electrical maintenance services
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                viewMode === 'grid' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                viewMode === 'list' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>List View</span>
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 group"
              >
                {/* Certificate Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => handleImageError(e, cert)}
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      <CheckCircle className="w-3 h-3" />
                      <span>{cert.status}</span>
                    </div>
                  </div>
                </div>
                
                {/* Certificate Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{cert.issuedBy}</p>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      {cert.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Certificate No:</span>
                      <span className="font-mono">{cert.certificateNo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Valid Until:</span>
                      <span>{cert.validUntil}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition"
                    >
                      <Eye className="w-4 h-4" />
                      View Certificate
                    </button>
                    <button 
                      onClick={() => window.open(cert.src, '_blank')}
                      className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium text-sm flex items-center justify-center transition"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Certificate</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Issued By</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Valid Until</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {certificates.map((cert) => (
                    <tr key={cert.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
                            <img
                              src={cert.src}
                              alt={cert.title}
                              className="w-full h-full object-cover"
                              onError={(e) => handleImageError(e, cert)}
                            />
                          </div>
                          <div>
                            <span className="font-medium text-gray-900">{cert.title}</span>
                            <p className="text-sm text-gray-500">{cert.certificateNo}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-700">{cert.issuedBy}</td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {cert.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-700">{cert.validUntil}</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="w-3 h-3" />
                          {cert.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedCert(cert)}
                            className="text-primary hover:text-primary/80 text-sm font-medium"
                          >
                            View
                          </button>
                          <button 
                            onClick={() => window.open(cert.src, '_blank')}
                            className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                          >
                            Download
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Certificate Details Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedCert.title}</h3>
                    <p className="text-gray-600 mt-1">{selectedCert.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-400 hover:text-gray-600 p-1"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Certificate Preview */}
                <div className="mb-6 bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-center">
                    <img
                      src={selectedCert.src}
                      alt={selectedCert.title}
                      className="max-w-full max-h-96 object-contain rounded"
                      onError={(e) => handleImageError(e, selectedCert)}
                    />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Issued By</label>
                      <p className="text-gray-900">{selectedCert.issuedBy}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Number</label>
                      <p className="text-gray-900 font-mono">{selectedCert.certificateNo}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {selectedCert.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
                      <p className="text-gray-900">{selectedCert.issueDate}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Valid Until</label>
                      <p className="text-gray-900">{selectedCert.validUntil}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <CheckCircle className="w-4 h-4" />
                        {selectedCert.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t">
                  <button 
                    onClick={() => window.open(selectedCert.src, '_blank')}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Certificate</span>
                  </button>
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* If no certificates show message */}
        {certificates.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Certificates Available</h3>
            <p className="text-gray-500">Certificates will be displayed here once available.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;