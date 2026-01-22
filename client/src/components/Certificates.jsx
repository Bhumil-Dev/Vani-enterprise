import { useState } from 'react';
import { FileText, Download, X, CheckCircle, Eye } from 'lucide-react';

const Certificates = () => {
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
    }
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const handleImageError = (e, cert) => {
    e.target.onerror = null;
    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f0f2f5'/%3E%3Ctext x='200' y='150' font-size='20' text-anchor='middle' fill='%236b7280'%3E${cert.title}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <section id="certificates" className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Certificates & Licenses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Licensed and certified by government authorities for electrical
            maintenance services
          </p>

          {/* View toggle */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {/* Grid */}
        {viewMode === 'grid' && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition"
              >
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4"
                    onError={(e) => handleImageError(e, cert)}
                  />
                  <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {cert.status}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-gray-900">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {cert.issuedBy}
                  </p>

                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 bg-primary text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button
                      onClick={() => window.open(cert.src, '_blank')}
                      className="px-4 py-2 border rounded-lg"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* List */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold">
                    Certificate
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">
                    Issued By
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">
                    Category
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">
                    Valid Until
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((cert) => (
                  <tr key={cert.id} className="border-t">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded">
                          <img
                            src={cert.src}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                            onError={(e) => handleImageError(e, cert)}
                          />
                        </div>
                        <span className="font-medium">
                          {cert.title}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{cert.issuedBy}</td>
                    <td className="py-3 px-4">{cert.category}</td>
                    <td className="py-3 px-4">{cert.validUntil}</td>
                    <td className="py-3 px-4">{cert.status}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="text-primary mr-3"
                      >
                        View
                      </button>
                      <button
                        onClick={() => window.open(cert.src, '_blank')}
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between mb-6">
                  <h3 className="text-2xl font-bold">
                    {selectedCert.title}
                  </h3>
                  <button onClick={() => setSelectedCert(null)}>
                    <X />
                  </button>
                </div>

                <img
                  src={selectedCert.src}
                  alt={selectedCert.title}
                  className="max-h-96 mx-auto object-contain"
                  onError={(e) => handleImageError(e, selectedCert)}
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certificates;
