"use client"

import React, { useEffect, useRef } from "react"
import { useForm } from "@inertiajs/react"

export default function ProfilePage({ user }) {
  const fileInputRef = useRef(null)

  const {
    data,
    setData,
    post,
    put,
    processing,
    errors,
    reset,
    recentlySuccessful,
  } = useForm({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    mobile_number: user?.mobile_number || "",
    date_of_birth: user?.date_of_birth || "",
    gender: user?.gender || "Male",
    profile_photo: null,
  })

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setData("profile_photo", file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    put(route("profile.update"), {
      preserveScroll: true,
      onSuccess: () => {
        console.log("Profile updated!")
      },
    })
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="min-h-screen bg-[#f0f7fc]">
      <main className="container mx-auto p-4 max-w-4xl">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex flex-col items-center">
              {data.profile_photo ? (
                <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                  <img src={URL.createObjectURL(data.profile_photo)} alt="Profile" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-[100px] h-[100px] rounded-full bg-[#5aadd0] flex items-center justify-center text-white text-5xl font-bold">
                  {data.first_name ? data.first_name[0].toUpperCase() : "A"}
                </div>
              )}
              <input type="file" ref={fileInputRef} onChange={handlePhotoUpload} accept="image/*" className="hidden" />
              <button type="button" className="text-[#006d92] font-medium mt-2 text-sm" onClick={() => fileInputRef.current?.click()}>
                Add Profile Photo
              </button>
            </div>

            <div className="flex-1">
              <h1 className="text-2xl font-bold">{data.first_name && data.last_name ? `${data.first_name} ${data.last_name}` : "Full Name"}</h1>
              <p className="text-gray-600">{data.mobile_number || "Mobile number"}</p>
              <p className="text-gray-600">{data.email}</p>
            </div>
          </div>
        </div>

        {/* Personal Info Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-6">Personal Information</h2>

          {/* Gender Buttons */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Gender</label>
            <div className="flex space-x-4">
              {["Male", "Female", "Others"].map((value) => (
                <button
                  type="button"
                  key={value}
                  className={`px-6 py-2 rounded-md ${data.gender === value ? "bg-[#006d92] text-white" : "bg-white border border-gray-300 text-gray-700"}`}
                  onClick={() => setData("gender", value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Mobile Number"
              value={data.mobile_number}
              onChange={(e) => setData("mobile_number", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="First Name"
              value={data.first_name}
              onChange={(e) => setData("first_name", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={data.last_name}
              onChange={(e) => setData("last_name", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={data.date_of_birth}
              onChange={(e) => setData("date_of_birth", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md md:col-span-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button type="submit" disabled={processing} className="px-8 py-2 bg-[#006d92] text-white rounded-md hover:bg-[#005a7a] transition">
              Save
            </button>
            <button type="button" onClick={() => reset()} className="px-8 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition">
              Cancel
            </button>
          </div>
        </div>
      </main>
    </form>
  )
}