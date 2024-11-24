var mobiles = {
    iphone: {
        iphone7: {
            processor: "Snapdragon 8 Gen 2",
            memory: {
                ram: 12,
                storage: 512,
            },
            camera: {
                rear: {
                    main: 200,
                    ultrawide: 12,
                    telephoto: 10,
                    telephotoPeriscope: 10,
                },
                front: 10,
            },
            brand: "iphone",
            battery: 5000,
            operatingSystem: "Android 13",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        },
        iphone8: {
            processor: "Snapdragon 12 Gen 5",
            memory: {
                ram: 8,
                storage: 256,
            },
            brand: "iphone",
            camera: {
                rear: {
                    main: 180,
                    ultrawide: 15,
                    telephoto: 10,
                    telephotoPeriscope: 20,
                },
                front: 12,
            },
            battery: 8000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        },
        iphone8plus: {
            processor: "Snapdragon 5 Gen 6",
            memory: {
                ram: 8,
                storage: 128,
            },
            brand: "iphone",

            camera: {
                rear: {
                    main: 160,
                    ultrawide: 18,
                    telephoto: 10,
                    telephotoPeriscope: 8,
                },
                front: 16,
            },
            battery: 5000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        },
        iphoneX: {
            processor: "Snapdragon 5 Gen 4",
            memory: {
                ram: 8,
                storage: 256,
            },
            brand: "iphone",

            camera: {
                rear: {
                    main: 130,
                    ultrawide: 16,
                    telephoto: 10,
                    telephotoPeriscope: 18,
                },
                front: 14,
            },
            battery: 6000,
            operatingSystem: "iphone X",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        },
        iphone11: {
            processor: "Snapdragon 7 Gen 9",
            memory: {
                ram: 16,
                storage: 512,
            },
            camera: {
                rear: {
                    main: 150,
                    ultrawide: 24,
                    telephoto: 16,
                    telephotoPeriscope: 10,
                },
                front: 20,
            },
            brand: "iphone",

            battery: 10000,
            operatingSystem: "iphone 11",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        },
    },
    xiomi: {
        redmiA2: {
            modelName: "Mi 12 Pro",
            display: {
                size: 6.73,
                resolution: "3200 x 1440",
                panelType: "AMOLED",
                refreshRate: 120,
            },
            brand: "xiomi",

            processor: "Snapdragon 8 Gen 1",
            memory: {
                ram: 8,
                storage: 256,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 4600,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },
        redmi10: {
            modelName: "Mi 8 Pro",
            display: {
                size: 5.73,
                resolution: "3000 x 1320",
                panelType: "AMOLED",
                refreshRate: 100,
            },
            brand: "xiomi",
            processor: "Snapdragon 7 Gen 5",
            memory: {
                ram: 12,
                storage: 256,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            brand: "xiomi",

            battery: 5000,
            operatingSystem: "Android 11",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },

        redmi11: {
            modelName: "Mi 14 Pro",
            display: {
                size: 6.0,
                resolution: "3000 x 1240",
                panelType: "AMOLED",
                refreshRate: 150,
            },
            brand: "xiomi",

            processor: "Snapdragon 8 Gen 4",
            memory: {
                ram: 12,
                storage: 512,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 8000,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },

        redmi12: {
            modelName: "Mi 12 Pro",
            display: {
                size: 7.4,
                resolution: "3200 x 1440",
                panelType: "AMOLED",
                refreshRate: 180,
            },
            brand: "xiomi",

            processor: "Snapdragon 12 Gen 1",
            memory: {
                ram: 12,
                storage: 512,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 8000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },

        redmi13: {
            modelName: "Mi 14 Pro",
            display: {
                size: 8.03,
                resolution: "4200 x 1540",
                panelType: "AMOLED",
                refreshRate: 100,
            },
            brand: "xiomi",

            processor: "Snapdragon 8 Gen 6",
            memory: {
                ram: 12,
                storage: 256,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },

        redmi13C: {
            modelName: "Mi 14 Pro",
            display: {
                size: 8.43,
                resolution: "4200 x 1340",
                panelType: "AMOLED",
                refreshRate: 100,
            },
            processor: "Snapdragon 9 Gen 5",
            memory: {
                ram: 12,
                storage: 512,
            },
            brand: "xiomi",

            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },
    },
    realme: {
        realmiNote50: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
                size: "6.5 inches",
                resolution: "FHD+ (1080 x 2400 pixels)",
                type: "AMOLED",
            },
            brand: "xiomi",

            processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
            memory: {
                ram: "8GB",
                storage: "128GB",
            },
            camera: {
                rear: {
                    resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
                },
                front: {
                    resolution: "16MP",
                },
            },
            battery: {
                capacity: "5000mAh",
                fastCharging: "65W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
        },
        realmiC67: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
                size: "6.7 inches",
                resolution: "FHD+ (1280 x 2100 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
            memory: {
                ram: "8GB",
                storage: "256GB",
            },
            brand: "xiomi",

            camera: {
                rear: {
                    resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
                },
                front: {
                    resolution: "14MP",
                },
            },
            battery: {
                capacity: "5000mAh",
                fastCharging: "65W",
            },
            operatingSystem: "Android 11",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
        },
        realmiC53: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
                size: "7. 1inches",
                resolution: "FHD+ (1180 x 2500 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
            memory: {
                ram: "12GB",
                storage: "128GB",
            },
            brand: "xiomi",

            camera: {
                rear: {
                    resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
                },
                front: {
                    resolution: "18MP",
                },
            },
            battery: {
                capacity: "8000mAh",
                fastCharging: "65W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
        },
        realmi9: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
                size: "7.2 inches",
                resolution: "FHD+ (1180 x 2200 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
            memory: {
                ram: "12GB",
                storage: "256GB",
            },
            brand: "xiomi",

            camera: {
                rear: {
                    resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
                },
                front: {
                    resolution: "24MP",
                },
            },
            battery: {
                capacity: "10000mAh",
                fastCharging: "75W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
        },
        realmi9i: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
                size: "6.9 inches",
                resolution: "FHD+ (1480 x 2400 pixels)",
                type: "AMOLED",
            },
            brand: "xiomi",

            processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
            memory: {
                ram: "12GB",
                storage: "512GB",
            },
            camera: {
                rear: {
                    resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
                },
                front: {
                    resolution: "16MP",
                },
            },
            battery: {
                capacity: "2000mAh",
                fastCharging: "70W",
            },
            operatingSystem: "Android 13",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
        },
    },
    samsung: {
        samsung_Galaxy_S24: {
            brand: "Samsung",
            model: "Galaxy S24 Ultra", // Replace with specific model

            // Display
            displaySize: 6.8, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",

            // Processor & Memory
            processor: "Snapdragon 8 Gen 2", // Replace with actual processor
            memory: {
                ram: 12,
                storage: 512,
            },

            // Cameras
            rearCamera: {
                megapixel: 108,
                features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
                megapixel: 40,
            },

            // Battery
            batteryCapacity: 5000, // mAh
            fastCharging: "45W Super Fast Charging",

            // Operating System
            operatingSystem: "Android 14",

            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
        },
        samsung_Galaxy_S51: {
            brand: "Samsung",
            model: "Galaxy S51 Pro", // Replace with specific model

            // Display
            displaySize: 7.2, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",

            // Processor & Memory
            processor: "Snapdragon 9 Gen 4", // Replace with actual processor
            memory: {
                ram: 8,
                storage: 128,
            },

            // Cameras
            rearCamera: {
                megapixel: 112,
                features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
                megapixel: 40,
            },

            // Battery
            batteryCapacity: 8000, // mAh
            fastCharging: "45W Super Fast Charging",

            // Operating System
            operatingSystem: "Android 11",

            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
        },
        samsung_Galaxy_Prime: {
            brand: "Samsung",
            model: "Galaxy Prime Ultra", // Replace with specific model

            // Display
            displaySize: 7.4, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",

            // Processor & Memory
            processor: "Snapdragon 8 Gen 10", // Replace with actual processor
            memory: {
                ram: 4,
                storage: 64,
            },

            // Cameras
            rearCamera: {
                megapixel: 108,
                features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
                megapixel: 40,
            },

            // Battery
            batteryCapacity: 5000, // mAh
            fastCharging: "45W Super Fast Charging",

            // Operating System
            operatingSystem: "Android 13",

            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
        },
        samsung_Galaxy_S46: {
            brand: "Samsung",
            model: "Galaxy S46 Ultra", // Replace with specific model

            // Display
            displaySize: 5.11, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",

            // Processor & Memory
            processor: "Snapdragon 8 Gen 2", // Replace with actual processor
            memory: {
                ram: 6,
                storage: 64,
            },

            // Cameras
            rearCamera: {
                megapixel: 108,
                features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
                megapixel: 40,
            },

            // Battery
            batteryCapacity: 20000, // mAh
            fastCharging: "65W Super Fast Charging",

            // Operating System
            operatingSystem: "Android 14",

            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
        },
        samsung_Galaxy_S77: {
            brand: "Samsung",
            model: "Galaxy S77 Ultra", // Replace with specific model

            // Display
            displaySize: 8.5, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",

            // Processor & Memory
            processor: "Snapdragon 12 Gen 24", // Replace with actual processor
            memory: {
                ram: 12,
                storage: 512,
            },

            // Cameras
            rearCamera: {
                megapixel: 158,
                features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
                megapixel: 40,
            },

            // Battery
            batteryCapacity: 20000, // mAh
            fastCharging: "85W Super Fast Charging",

            // Operating System
            operatingSystem: "Android 14",

            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: true,
        },
    },
};

const selectMobileBrand = document.getElementById("mobileBrandSelect");
const selectBrandModel = document.getElementById("brandModelSelect");

Object.keys(mobiles).forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
    selectMobileBrand.appendChild(option);
});

selectMobileBrand.addEventListener("change", function () {
    console.log(`Brand Selected: ${selectMobileBrand.value}`);
    const selectedBrand = selectMobileBrand.value;
    selectBrandModel.innerHTML = '<option>Select Brand Model</option>';
    if (mobiles[selectedBrand]) {
        Object.keys(mobiles[selectedBrand]).forEach(model => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model.charAt(0).toUpperCase() + model.slice(1);
            selectBrandModel.appendChild(option);
        });

    }
});

// Function to handle table updates
// Handle model change and display features in the table
// Handle model change and display features in the table
selectBrandModel.addEventListener("change", function() {
    const selectedBrand = selectMobileBrand.value;
    const selectedModel = selectBrandModel.value;

    if (mobiles[selectedBrand] && mobiles[selectedBrand][selectedModel]) {
        const modelData = mobiles[selectedBrand][selectedModel];
        const tableBody = document.querySelector("table tbody");
        tableBody.innerHTML = "";  // Clear existing rows

        // Loop through modelData
        Object.entries(modelData).forEach(([key, value]) => {
            const row = document.createElement("tr");
            const cellKey = document.createElement("th");
            const cellValue = document.createElement("td");

            cellKey.scope = "row";
            cellKey.textContent = key.charAt(0).toUpperCase() + key.slice(1);  // Capitalize the feature name

            // Check if the value is an object and not an array
            if (typeof value === 'object' && !Array.isArray(value)) {
                // Handle nested objects (e.g., camera, memory, etc.)
                const nestedContent = Object.entries(value).map(([nestedKey, nestedValue]) => {
                    // For nested objects, handle their keys and values (such as 'rear', 'front' for camera)
                    if (typeof nestedValue === 'object') {
                        return `${nestedKey.charAt(0).toUpperCase() + nestedKey.slice(1)}: ${Object.entries(nestedValue).map(([subKey, subValue]) => {
                            return `${subKey.charAt(0).toUpperCase() + subKey.slice(1)}: ${subValue}`;
                        }).join(", ")}`;
                    } else {
                        return `${nestedKey.charAt(0).toUpperCase() + nestedKey.slice(1)}: ${nestedValue}`;
                    }
                }).join(", ");
                cellValue.textContent = nestedContent;
            } else if (Array.isArray(value)) {
                // Handle arrays (e.g., special features)
                cellValue.textContent = value.join(", ");
            } else {
                // Regular value (e.g., number or string)
                cellValue.textContent = value;
            }

            row.appendChild(cellKey);
            row.appendChild(cellValue);
            tableBody.appendChild(row);
        });
    }
});
