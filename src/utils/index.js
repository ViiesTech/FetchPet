import { Dimensions } from "react-native";
import icons from "../assets/icons";
import images from "../assets/images";

const percentageCalculation = (max, val) => max * (val / 100);

const fontCalculation = (height, width, val) => {
    const widthDimension = height > width ? width : height;
    const aspectRatioBasedHeight = (16 / 9) * widthDimension;
    return percentageCalculation(
        Math.sqrt(
            Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2),
        ),
        val,
    );
};
export const responsiveFontSize = f => {
    const { height, width } = Dimensions.get('window');
    return fontCalculation(height, width, f);
};
export const responsiveHeight = h => {
    const { height } = Dimensions.get('window');
    return height * (h / 100);
};
export const responsiveWidth = w => {
    const { width } = Dimensions.get('window');
    return width * (w / 100);
};

export const socialIcons = [
    {
        id: 1,
        text: 'CONTINUE WITH GOOGLE',
        icon: icons.google,
    },
    {
        id: 2,
        text: 'CONTINUE WITH FACEBOOK',
        icon: icons.fb,
    },
];

export const services = [
    {
        id: 1,
        image: images.car,
        text: 'Book A Car'
    },
    {
        id: 1,
        image: images.pet,
        text: 'Rescues'
    }
]

export const serviceProfiles = [
    {
        id: 1,
        image: images.profile3,
        name: 'John Doe',
        rating: '4.8',
        designation: 'Driver',
        desc: 'Lorem ipsum dolor sit amet, dummy consectetur adipiscing elit'
    },
    {
        id: 2,
        image: images.profile4,
        name: 'Dave Miller',
        rating: '4.9',
        designation: 'Driver',
        desc: 'Lorem ipsum dolor sit amet, dummy consectetur adipiscing elit'
    },
]

export const availableDrivers = [
    {
        id: 1,
        image: images.profile7,
        name: 'Alexander',
        rating: '4.8',
        designation: 'Driver',
        price: '$180',
        desc: 'Lorem ipsum dolor sit amet, dummy consectetur adipiscing elit'
    },
    {
        id: 2,
        image: images.profile8,
        name: 'Dean Barker',
        rating: '4.9',
        designation: 'Driver',
        price: '$210',
        desc: 'Lorem ipsum dolor sit amet, dummy consectetur adipiscing elit'
    },
    {
        id: 3,
        image: images.profile9,
        name: 'Roy Dillon',
        rating: '4.7',
        price: '$185',
        designation: 'Driver',
        desc: 'Lorem ipsum dolor sit amet, dummy consectetur adipiscing elit'
    },


]

export const categories = [
    {
        id: 1,
        image: images.dog,
        text: 'Dog'
    },
    {
        id: 2,
        image: images.cat,
        text: 'Cat'
    }
]

export const sizePicker = [
    {
        id: 1,
        label: 'Medium 21 - 50 lbs',
        value: 'Medium 21 - 50 lbs',
    },
    {
        id: 2,
        label: 'Large 31 - 60 lbs',
        value: 'Large 31 - 60 lbs',
    },
    {
        id: 3,
        label: 'Medium 41 - 70 lbs',
        value: 'Medium 41 - 70 lbs',
    },
];

export const agePicker = [
    {
        id: 1,
        label: 'Puppy 0 - 1 years',
        value: 'Puppy 0 - 1 years',
    },
    {
        id: 2,
        label: 'Puppy 2 - 3 years',
        value: 'Puppy 2 - 3 years',
    },
    {
        id: 3,
        label: 'Puppy 4 - 5 years',
        value: 'Puppy 4 - 5 years',
    },
];

export const timings = [
    {
        id: 1,
        label: '10:00 Am',
        value: '10:00 Am',
    },
    {
        id: 2,
        label: '12:00 Am',
        value: '12:00 Am',
    },
    {
        id: 3,
        label: '8:00 Am',
        value: '8:00 Am',
    },
];

export const vehicles = [
    {
        id: 1,
        label: 'Honda',
        value: 'Honda',
    },
    {
        id: 2,
        label: 'Toyota',
        value: 'Toyota',
    },
    {
        id: 3,
        label: 'Suzuki',
        value: 'Suzuki',
    },
];


// export const data = [
//     {
//         id: 1,
//         image: images.car2,
//     },
//     {
//         id: 2,
//         image: images.car2,
//     },
//     {
//         id: 3,
//         image: images.car2,
//     },
// ];

export const vehicleType = [
    {
        id: 1,
        text: '4 persons seating',
        iconName: icons.person,
    },
    {
        id: 2,
        text: '16 MPG',
        iconName: icons.speedometer,
    },
    {
        id: 3,
        text: 'Petrol',
        iconName: icons.petrol2,
    },
    {
        id: 4,
        text: '4 Doors',
        iconName: icons.doors2,
    },
];

export const featuresData = [
    {
        id: 1,
        text: 'USB Input',
        iconName: icons.usb,
    },
    {
        id: 2,
        text: 'Automatic Transmission',
        iconName: icons.autoTransmission,
    },
    {
        id: 3,
        text: 'Aux Input',
        iconName: icons.auxInput,
    },
    {
        id: 4,
        text: 'Bluetooth',
        iconName: icons.bluetooth,
    },
];

export const incomingRides = [
    {
        id: 1,
        image: images.profile,
        name: 'Alicia Roth',
        weight: 'Medium 31 - 60 lbs',
        date: '12/11/2024',
        time: '11:00 Am',
        age: 'Puppy 0 - 1 years',
        distance: '6 mins away (900m)',
    },
    {
        id: 2,
        image: images.profile1,
        name: 'Jason',
        weight: 'Medium 20 - 40 lbs',
        date: '10/11/2024',
        time: '7:00 Am',
        age: 'Puppy 2 - 4 years',
        distance: '5 mins away (650m)',
    },
    {
        id: 3,
        image: images.profile2,
        name: 'Aaron Cobb',
        weight: 'Medium 15 - 35 lbs',
        date: '7/11/2024',
        time: '9:00 Am',
        age: 'Puppy 4 - 7 years',
        distance: '3 mins away (300m)',
    }
]

export const locations = [
    {
        id: 1,
        heading: 'Pickup',
        location: '909-1/2 E 49th'
    },
    {
        id: 2,
        heading: 'Drop Off',
        location: '909-1/2 H 51th'
    }
]

export const rideOptions = [
    {
        id: 1,
        icon: icons.message
    },
    {
        id: 2,
        icon: icons.call
    }
]

export const profileData = [
    {
        id: 1,
        text: 'Window Screens',
        iconName: icons.window,
    },
    {
        id: 2,
        text: 'Pet Carriers or Crates',
        iconName: icons.house,
    },
    {
        id: 3,
        text: 'Pet First Aid Kit',
        iconName: icons.kit,
    },
    {
        id: 4,
        text: 'Temperature Control',
        iconName: icons.temp,
    },
];

export const cars = [
    {
        id: 1,
        image: images.car2
    },
    {
        id: 2,
        image: images.car3
    },
    {
        id: 3,
        image: images.car4
    },
]

export const data = [
    {
        id: 1,
        description: 'Safe Travels, Happy Pets.',
        bgImage: images.slide4
    },
    {
        id: 2,
        description: 'Explore a world of pet services tailored to your needs.',
        bgImage: images.slide1,
    },
    {
        id: 3,
        description: 'Book safe and pet-friendly rides anytime.',
        bgImage: images.slide2,
    },
    {
        id: 4,
        description: 'Track your rides in real-time.',
        bgImage: images.slide3,
    },
]

export const profileSettings = [
    {
        id: 1,
        icon: icons.fech,
        text: 'About Fech',
        navTo: 'About'
    },
    {
        id: 2,
        icon: icons.favourite,
        text: 'Your Favourites',
        navTo: '',
    },
    {
        id: 3,
        icon: icons.dollar,
        text: 'Payments',
        navTo: '',
    },
    {
        id: 4,
        icon: icons.settings,
        text: 'Settings',
        navTo: '',
    },
    {
        id: 5,
        icon: icons.logout,
        text: 'Log out',
        navTo: 'AuthStack',
    }
]