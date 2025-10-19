import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DinoKeeperDashboard = () => {
  // Progress data for the main line chart
  const progressData = [
    { day: 'Day 1', score: 42 },
    { day: 'Day 5', score: 48 },
    { day: 'Day 10', score: 55 },
    { day: 'Day 15', score: 62 },
    { day: 'Day 20', score: 68 },
    { day: 'Day 25', score: 75 },
    { day: 'Day 30', score: 78 }
  ];

  // Success rate data for bar chart
  const successData = [
    { session: 'S1', rate: 65 },
    { session: 'S2', rate: 72 },
    { session: 'S3', rate: 78 },
    { session: 'S4', rate: 81 },
    { session: 'S5', rate: 85 }
  ];

  // Radial gauge component
  const RadialGauge = ({ value, max = 100 }) => {
    const percentage = (value / max) * 100;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="#E5E7EB"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="#FF8A5B"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-semibold text-slate-700">{value}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-light text-slate-800 mb-2">Dino Keeper Clinical Dashboard</h1>
          <p className="text-slate-500 text-sm">Fine Motor Skill Tracking & Progress Analytics</p>
        </div>

        {/* Patient Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl font-semibold">AR</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-800">Alex Ray</h2>
              <p className="text-slate-500 text-sm">Age: 7 years</p>
            </div>
            <div className="ml-auto flex gap-4">
              <div className="text-right">
                <p className="text-xs text-slate-500">Sessions Completed</p>
                <p className="text-lg font-semibold text-slate-700">24</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500">Total Play Time</p>
                <p className="text-lg font-semibold text-slate-700">6.2 hrs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Progress Graph */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Overall Fine Motor Skill Progression</h3>
          <p className="text-xs text-slate-500 mb-4">30-Day Performance Trend</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="day" 
                stroke="#94A3B8"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#94A3B8"
                style={{ fontSize: '12px' }}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Task-Specific Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Motor Planning */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <ellipse cx="12" cy="12" rx="8" ry="11" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800">Motor Planning</h4>
                <p className="text-xs text-slate-500">Egg Rubbing</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-600">Current Level</span>
                <span className="text-lg font-bold text-slate-700">4/5</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Movement Smoothness</p>
              <p className="text-3xl font-semibold text-slate-700">8.4<span className="text-lg text-slate-400">/10</span></p>
              <p className="text-xs text-green-600 mt-1">↑ 12% from last week</p>
            </div>
          </div>

          {/* Pincer Grasp */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 4 2 5l4 7l4-7c1-1 2-3 2-5c0-3.5-2.5-6-6-6zm0 8c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800">Pincer Grasp</h4>
                <p className="text-xs text-slate-500">Shell Clearing</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-600">Current Level</span>
                <span className="text-lg font-bold text-slate-700">3/5</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-3">Success Rate (Last 5 Sessions)</p>
              <ResponsiveContainer width="100%" height={80}>
                <BarChart data={successData}>
                  <Bar dataKey="rate" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <XAxis dataKey="session" stroke="#CBD5E1" style={{ fontSize: '10px' }} />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-green-600 mt-2">Current: 85% success rate</p>
            </div>
          </div>

          {/* Force Modulation */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M12 14c-3 0-5 1-6 2v2h12v-2c-1-1-3-2-6-2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-800">Force Modulation</h4>
                <p className="text-xs text-slate-500">Fruit Squeezing</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-600">Current Level</span>
                <span className="text-lg font-bold text-slate-700">2/5</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-3">Grip Accuracy</p>
              <RadialGauge value={72} />
              <p className="text-xs text-center text-slate-600 mt-2">Target Range: 70-80%</p>
            </div>
          </div>
        </div>

        {/* Therapist Notes */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Recent Observations</h3>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              Alex shows strong improvement in motor planning tasks. The egg rubbing activity demonstrates increased movement smoothness and reduced compensatory patterns. Continue encouraging slow, deliberate movements.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Pincer grasp strength is progressing well. Consider increasing difficulty level next session. Force modulation requires additional attention—focus on tactile feedback exercises to improve grip calibration.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
              <p className="text-xs text-slate-500">Last updated: Oct 18, 2025 by Dr. Sarah Martinez, PT</p>
              <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">Edit Notes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinoKeeperDashboard;