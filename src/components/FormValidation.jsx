import React, { useState } from 'react';
import swal from 'sweetalert';

const FormValidation = () => {
    const formData = {
        name: '',
        email: '',
        password: '',
        conformPassword: '',
        select: "English",
        checkBox: false,
    };

    const [value, setValue] = useState(formData);
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const createError = () => {
        let tempErrors = {};
        if (!value.name) tempErrors.name = "Name is required";
        if (!value.email) tempErrors.email = "Email is required";
        if (!value.password) tempErrors.password = "Password is required";
        if (value.password !== value.conformPassword)
            tempErrors.conformPassword = "Passwords do not match";
        if (!value.conformPassword) tempErrors.conformPassword = "Enter Password";
        if (!value.checkBox) tempErrors.checkBox = "Accept the terms";
        return tempErrors;
    };

    const submitHandle = (e) => {
        e.preventDefault();
        const validationErrors = createError();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Submitted Data:", value);
            swal("Success!", "Form submitted successfully!", "success");
            setValue(formData);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Form Validation</h2>
                <form onSubmit={submitHandle}>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Name</label>
                        <input className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text" placeholder="Enter Your Name" value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} />
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Email</label>
                        <input className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email" placeholder="Enter Your Email" value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })} />
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Password</label>
                        <div className="relative">
                            <input className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type={showPassword ? "text" : "password"} placeholder="Enter Your Password" value={value.password} onChange={(e) => setValue({ ...value, password: e.target.value })} />
                            <span className="absolute right-3 top-2.5 cursor-pointer text-gray-600 text-sm" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? "Hide" : "Show"}</span>
                        </div>
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Confirm Password</label>
                        <input className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password" placeholder="Confirm Your Password" value={value.conformPassword} onChange={(e) => setValue({ ...value, conformPassword: e.target.value })} />
                        <p className="text-red-500 text-sm mt-1">{errors.conformPassword}</p>

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-1">Select</label>
                        <select className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={value.select} onChange={(e) => setValue({ ...value, select: e.target.value })}>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            checked={value.checkBox} onChange={(e) => setValue({ ...value, checkBox: e.target.checked })} />
                        <label className="ml-2 text-gray-600 text-sm">I accept the terms</label>
                    </div>
                    <p className="text-red-500 text-sm mb-4">{errors.checkBox}</p>
                    <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition duration-200">
                        Submit</button>
                </form>
            </div>
        </div>
    );
};

export default FormValidation;
