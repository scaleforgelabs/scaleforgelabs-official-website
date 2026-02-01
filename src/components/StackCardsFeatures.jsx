import { Shield, Search, Zap, MousePointer, Building, Share2, BarChart3, Star } from 'lucide-react';

export default function StackCardsFeatures() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">StackCards Features</h3>
                <p className="text-gray-600">Everything you need for professional networking</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="size-[520px] top-0 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]/70"></div>
                
                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-violet-100 rounded-full">
                        <Shield className="w-7 h-7 text-violet-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Security Features</h4>
                        <p className="text-sm text-slate-600">Bank-level encryption, cloud backup, privacy-first design</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-blue-100 rounded-full">
                        <Search className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Organization</h4>
                        <p className="text-sm text-slate-600">Auto-categorization, instant search, smart filtering, favorites system</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-green-100 rounded-full">
                        <Zap className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">AI & Actions</h4>
                        <p className="text-sm text-slate-600">2-second scanning, 99% accuracy, auto-fills fields, works with damaged cards</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-orange-100 rounded-full">
                        <MousePointer className="w-7 h-7 text-orange-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">One-Tap Actions</h4>
                        <p className="text-sm text-slate-600">Tap to call, email, visit website, add to contacts</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-purple-100 rounded-full">
                        <Building className="w-7 h-7 text-purple-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Enterprise</h4>
                        <p className="text-sm text-slate-600">Team licensing, bulk management, admin dashboard, team sharing</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-pink-100 rounded-full">
                        <Share2 className="w-7 h-7 text-pink-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Networking</h4>
                        <p className="text-sm text-slate-600">QR code sharing, LinkedIn integration, professional templates, export to CSV</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-cyan-100 rounded-full">
                        <BarChart3 className="w-7 h-7 text-cyan-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Analytics</h4>
                        <p className="text-sm text-slate-600">Contact insights, industry breakdown, growth tracking</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-emerald-100 rounded-full">
                        <Star className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Benefits</h4>
                        <p className="text-sm text-slate-600">Free tier, no ads premium, works offline, cross-platform</p>
                    </div>
                </div>
            </div>
        </>
    );
}