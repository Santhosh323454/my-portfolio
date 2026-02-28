import { useState } from 'react';
import { useRealtimeData } from '../../hooks/useRealtimeData';
import FileUploader from './FileUploader';

export default function ExperienceManager() {
    const [certifications, updateCertifications] = useRealtimeData('certifications');
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({ id: '', name: '', issuer: '', year: '' });

    const handleEdit = (cert) => {
        setEditingId(cert.id);
        setFormData(cert);
    };

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this certification?")) {
            const newCerts = certifications.filter(c => c.id !== id);
            updateCertifications(newCerts);
        }
    };

    const handleSave = () => {
        let newCerts;
        if (editingId === 'new') {
            newCerts = [...certifications, { ...formData, id: Date.now().toString() }];
        } else {
            newCerts = certifications.map(c => c.id === editingId ? { ...c, ...formData } : c);
        }
        updateCertifications(newCerts);
        setEditingId(null);
        alert('Certifications synced live!');
    };

    const handleCreateNew = () => {
        setEditingId('new');
        setFormData({ id: '', name: '', issuer: '', year: '' });
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-orange-900">Manage Certifications</h2>
                <button onClick={handleCreateNew} className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-bold hover:bg-orange-200 text-sm">
                    + Add Cert
                </button>
            </div>

            <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {certifications && certifications.map((cert) => (
                    <div key={cert.id} className="p-4 border border-gray-100 rounded-xl bg-slate-50 flex flex-col gap-3">

                        {editingId === cert.id ? (
                            <CertForm formData={formData} setFormData={setFormData} handleSave={handleSave} handleCancel={() => setEditingId(null)} />
                        ) : (
                            <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-slate-800">{cert.name}</h3>
                                    <p className="text-xs font-semibold text-orange-600 mb-1">{cert.issuer}</p>
                                    <p className="text-xs text-slate-500 mb-2">{cert.year}</p>
                                </div>
                                <div className="flex flex-col gap-2 shrink-0">
                                    <button onClick={() => handleEdit(cert)} className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50">Edit</button>
                                    <button onClick={() => handleDelete(cert.id)} className="text-xs bg-red-50 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100">Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Create New Form Inline */}
                {editingId === 'new' && (
                    <div className="p-4 border border-orange-200 rounded-xl bg-orange-50 flex flex-col gap-3">
                        <h3 className="font-bold text-orange-900 mb-2">Create New Certification</h3>
                        <CertForm formData={formData} setFormData={setFormData} handleSave={handleSave} handleCancel={() => setEditingId(null)} />
                    </div>
                )}
            </div>
        </div>
    );
}

function CertForm({ formData, setFormData, handleSave, handleCancel }) {
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    return (
        <div className="flex flex-col gap-3">
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="p-2 border rounded" placeholder="Certification Name" />
            <input type="text" name="issuer" value={formData.issuer} onChange={handleChange} className="p-2 border rounded" placeholder="Issuer (e.g. Google)" />
            <input type="text" name="year" value={formData.year || ''} onChange={handleChange} className="p-2 border rounded" placeholder="Year / Status" />

            <FileUploader
                label="Certificate PDF (Optional)"
                type="pdf"
                folderName="certificates"
                value={formData.certificateUrl || ''}
                onChange={(url) => setFormData({ ...formData, certificateUrl: url })}
            />

            <div className="flex gap-2 mt-2">
                <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 text-sm">Save</button>
                <button onClick={handleCancel} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-bold hover:bg-gray-400 text-sm">Cancel</button>
            </div>
        </div>
    );
}
