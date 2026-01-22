import { useState, useMemo } from 'react';
import { 
  FileText, 
  X, 
  CheckCircle, 
  Eye, 
  LayoutGrid, 
  List, 
  Shield 
} from 'lucide-react';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('All');

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

  const categories = ['All', ...new Set(certificates.map(c => c.category))];

  const filteredCerts = useMemo(() => {
    return activeFilter === 'All' 
      ? certificates 
      : certificates.filter(c => c.category === activeFilter);
  }, [activeFilter, certificates]);

  const handleImageError = (e, cert) => {
    e.target.onerror = null;
    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f0fdf4'/%3E%3Ctext x='200' y='150' font-size='16' font-weight='bold' text-anchor='middle' fill='%23166534'%3E${cert.title}%3C/text%3E%3C/svg%3E`;
  };

  return (
    <section id="certificates" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-green-50/50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
              <Shield className="w-3 h-3" />
              Verified Compliance
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Our <span className="text-green-600">Certificates</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex bg-slate-100 p-1 rounded-xl">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                    activeFilter === cat ? 'bg-white text-green-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white text-green-600 shadow-sm' : 'text-slate-400'}`}
              >
                <LayoutGrid size={20} />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white text-green-600 shadow-sm' : 'text-slate-400'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* --- GRID VIEW --- */}
        {viewMode === 'grid' ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="group bg-white rounded-3xl border border-slate-100 p-4 transition-all duration-500 hover:border-green-200 hover:shadow-2xl hover:shadow-green-900/5 hover:-translate-y-2"
              >
                <div className="relative h-56 rounded-2xl bg-slate-50 overflow-hidden mb-6 flex items-center justify-center border border-slate-50 group-hover:border-green-100 transition-colors">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-contain p-6 transform transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => handleImageError(e, cert)}
                  />
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1.5 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg">
                      <CheckCircle className="w-3 h-3" />
                      {cert.status}
                    </span>
                  </div>
                </div>
                <div className="px-2 pb-2 text-center">
                  <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">{cert.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-green-700 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6">{cert.issuedBy}</p>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-green-600 transition-colors"
                  >
                    <Eye className="w-4 h-4" /> View Full Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- LIST VIEW --- */
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">Document</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">Issuer</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">Expiry</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredCerts.map((cert) => (
                  <tr key={cert.id} className="group hover:bg-green-50/30 transition-colors">
                    <td className="p-6 text-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg p-2 flex items-center justify-center group-hover:bg-white transition-colors">
                           <FileText className="text-green-600 w-5 h-5" />
                        </div>
                        <p className="font-bold text-slate-900">{cert.title}</p>
                      </div>
                    </td>
                    <td className="p-6 text-sm text-slate-600">{cert.issuedBy}</td>
                    <td className="p-6 text-sm font-bold text-slate-900">{cert.validUntil}</td>
                    <td className="p-6 text-right">
                       <button onClick={() => setSelectedCert(cert)} className="text-green-600 font-bold text-sm hover:underline">
                        Open Preview
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal Viewer */}
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={() => setSelectedCert(null)} />
            <div className="relative bg-white w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-900">{selectedCert.title}</h3>
                <button onClick={() => setSelectedCert(null)} className="p-2 bg-slate-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 bg-slate-50">
                <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-center shadow-inner">
                  <img 
                    src={selectedCert.src} 
                    alt={selectedCert.title} 
                    className="max-h-[60vh] object-contain" 
                    onError={(e) => handleImageError(e, selectedCert)} 
                  />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">License No</p>
                    <p className="text-sm font-bold text-slate-900">{selectedCert.certificateNo}</p>
                  </div>
                  <div className="p-4 bg-green-600 rounded-xl text-white">
                    <p className="text-[10px] font-black opacity-80 uppercase tracking-widest mb-1">Status</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} />
                      <span className="text-sm font-bold">Verified Valid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;