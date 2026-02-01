import { Building2, ClipboardList, Users, BookOpen, BarChart3, Monitor, Calendar, Shield, Smartphone } from 'lucide-react';

export default function BuildTrackerFeatures() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">BuildTracker Features</h3>
                <p className="text-gray-600">Complete project management and build tracking capabilities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="size-[520px] top-0 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1]/70"></div>
                
                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-indigo-100 rounded-full">
                        <Building2 className="w-7 h-7 text-indigo-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Multi-Organization</h4>
                        <p className="text-sm text-slate-600">Manage multiple organizations, role-based permissions, isolated workspaces, cross-org reporting</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-emerald-100 rounded-full">
                        <ClipboardList className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Task Management</h4>
                        <p className="text-sm text-slate-600">Create, assign, and track tasks, custom workflows, automated updates, priority management</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-amber-100 rounded-full">
                        <Users className="w-7 h-7 text-amber-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Team Collaboration</h4>
                        <p className="text-sm text-slate-600">Real-time collaboration, file sharing, comments & activity feeds, team notifications</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-blue-100 rounded-full">
                        <BookOpen className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Wiki & Documentation</h4>
                        <p className="text-sm text-slate-600">Built-in wiki system, version control, collaborative editing, knowledge base</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-purple-100 rounded-full">
                        <BarChart3 className="w-7 h-7 text-purple-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Analytics & Reports</h4>
                        <p className="text-sm text-slate-600">Performance metrics, progress tracking, exportable insights, custom reports</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-cyan-100 rounded-full">
                        <Monitor className="w-7 h-7 text-cyan-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Real-time Dashboard</h4>
                        <p className="text-sm text-slate-600">Live project metrics, team activity, customizable widgets, performance indicators</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-rose-100 rounded-full">
                        <Calendar className="w-7 h-7 text-rose-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Timeline & Milestones</h4>
                        <p className="text-sm text-slate-600">Visual timelines, Gantt charts, deadline management, milestone tracking</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-red-100 rounded-full">
                        <Shield className="w-7 h-7 text-red-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Enterprise Security</h4>
                        <p className="text-sm text-slate-600">Multi-factor authentication, encryption, SOC 2 compliance, audit trails</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center max-w-80">
                    <div className="p-6 aspect-square bg-green-100 rounded-full">
                        <Smartphone className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="mt-5 space-y-2 text-center">
                        <h4 className="text-base font-semibold text-slate-700">Mobile Responsive</h4>
                        <p className="text-sm text-slate-600">Optimized for all devices, native mobile apps, offline capabilities, coming soon</p>
                    </div>
                </div>
            </div>
        </>
    );
}