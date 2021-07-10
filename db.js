module.exports = () => {
  const data = {
    profile: {
      name: "Rajkumar",
    },
    login: {
      token: "rdtfyguiauydew867ryui",
    },
    users: [],
    doctors: [],
  };
  for (let i = 0; i < 100; i++) {
    data.doctors.push({
      id: i,
      name: `Dr. Abdul Khan${i}`,
      experience: 20,
      specialisation: "Pulmonology",
      education: "MBBS",
      fee: '500RS',
      profileImage:
        "https://newassets.apollo247.com/doctors/652bfa05-91fa-4534-b171-ea3d284d9bf9.png",
    });
  }
  return data;
};
