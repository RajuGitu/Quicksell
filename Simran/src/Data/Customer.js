const baseCustomers = [
    { name: "John Smith", email: "john.smith@email.com", phone: "+1-555-0101", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 2:30 PM", avatar: "/media/avatar.png" },
    { name: "Sarah Johnson", email: "sarah.j@email.com", phone: "+1-555-0102", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 1:45 PM", avatar: "/media/avatar.png" },
    { name: "Mike Wilson", email: "mike.wilson@email.com", phone: "+1-555-0103", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 12:20 PM", avatar: "/media/avatar.png" },
    { name: "Emily Davis", email: "emily.davis@email.com", phone: "+1-555-0104", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 11:15 AM", avatar: "/media/avatar.png" },
    { name: "David Brown", email: "david.brown@email.com", phone: "+1-555-0105", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 10:30 AM", avatar: "/media/avatar.png" },
    { name: "Sophia Miller", email: "sophia.m@email.com", phone: "+1-555-0106", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 9:50 AM", avatar: "/media/avatar.png" },
    { name: "James Anderson", email: "james.a@email.com", phone: "+1-555-0107", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 9:00 AM", avatar: "/media/avatar.png" },
    { name: "Olivia Taylor", email: "olivia.t@email.com", phone: "+1-555-0108", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 6:30 PM", avatar: "/media/avatar.png" },
    { name: "William Moore", email: "william.m@email.com", phone: "+1-555-0109", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 5:45 PM", avatar: "/media/avatar.png" },
    { name: "Isabella Thomas", email: "isabella.t@email.com", phone: "+1-555-0110", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 5:00 PM", avatar: "/media/avatar.png" },
    { name: "Ethan Jackson", email: "ethan.j@email.com", phone: "+1-555-0111", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 4:15 PM", avatar: "/media/avatar.png" },
    { name: "Ava White", email: "ava.w@email.com", phone: "+1-555-0112", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 3:30 PM", avatar: "/media/avatar.png" },
    { name: "Alexander Harris", email: "alex.h@email.com", phone: "+1-555-0113", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 2:45 PM", avatar: "/media/avatar.png" },
    { name: "Mia Martin", email: "mia.m@email.com", phone: "+1-555-0114", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 2:00 PM", avatar: "/media/avatar.png" },
    { name: "Benjamin Lee", email: "ben.lee@email.com", phone: "+1-555-0115", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 1:15 PM", avatar: "/media/avatar.png" },
    { name: "Charlotte Perez", email: "charlotte.p@email.com", phone: "+1-555-0116", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 12:30 PM", avatar: "/media/avatar.png" },
    { name: "Daniel King", email: "daniel.k@email.com", phone: "+1-555-0117", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 11:45 AM", avatar: "/media/avatar.png" },
    { name: "Amelia Wright", email: "amelia.w@email.com", phone: "+1-555-0118", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 11:00 AM", avatar: "/media/avatar.png" },
    { name: "Matthew Scott", email: "matthew.s@email.com", phone: "+1-555-0119", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 10:15 AM", avatar: "/media/avatar.png" },
    { name: "Harper Green", email: "harper.g@email.com", phone: "+1-555-0120", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 9:30 AM", avatar: "/media/avatar.png" },
    { name: "Lucas Hall", email: "lucas.h@email.com", phone: "+1-555-0121", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 6:30 PM", avatar: "/media/avatar.png" },
    { name: "Evelyn Allen", email: "evelyn.a@email.com", phone: "+1-555-0122", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 5:45 PM", avatar: "/media/avatar.png" },
    { name: "Jack Young", email: "jack.y@email.com", phone: "+1-555-0123", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 5:00 PM", avatar: "/media/avatar.png" },
    { name: "Abigail Hernandez", email: "abigail.h@email.com", phone: "+1-555-0124", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 4:15 PM", avatar: "/media/avatar.png" },
    { name: "Henry Lopez", email: "henry.l@email.com", phone: "+1-555-0125", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 3:30 PM", avatar: "/media/avatar.png" },
    { name: "Grace Hill", email: "grace.h@email.com", phone: "+1-555-0126", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 2:45 PM", avatar: "/media/avatar.png" },
    { name: "Sebastian Adams", email: "sebastian.a@email.com", phone: "+1-555-0127", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 2:00 PM", avatar: "/media/avatar.png" },
    { name: "Chloe Baker", email: "chloe.b@email.com", phone: "+1-555-0128", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 1:15 PM", avatar: "/media/avatar.png" },
    { name: "David Gonzalez", email: "david.g@email.com", phone: "+1-555-0129", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 12:30 PM", avatar: "/media/avatar.png" },
    { name: "Lily Nelson", email: "lily.n@email.com", phone: "+1-555-0130", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 11:45 AM", avatar: "/media/avatar.png" },
    { name: "Andrew Carter", email: "andrew.c@email.com", phone: "+1-555-0131", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 11:00 AM", avatar: "/media/avatar.png" },
    { name: "Zoe Mitchell", email: "zoe.m@email.com", phone: "+1-555-0132", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 10:15 AM", avatar: "/media/avatar.png" },
    { name: "Christopher Roberts", email: "chris.r@email.com", phone: "+1-555-0133", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 9:30 AM", avatar: "/media/avatar.png" },
    { name: "Ella Turner", email: "ella.t@email.com", phone: "+1-555-0134", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 6:30 PM", avatar: "/media/avatar.png" },
    { name: "Joshua Phillips", email: "josh.p@email.com", phone: "+1-555-0135", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 5:45 PM", avatar: "/media/avatar.png" },
    { name: "Scarlett Campbell", email: "scarlett.c@email.com", phone: "+1-555-0136", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 5:00 PM", avatar: "/media/avatar.png" },
    { name: "Anthony Parker", email: "anthony.p@email.com", phone: "+1-555-0137", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 4:15 PM", avatar: "/media/avatar.png" },
    { name: "Victoria Evans", email: "victoria.e@email.com", phone: "+1-555-0138", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 3:30 PM", avatar: "/media/avatar.png" },
    { name: "Joseph Edwards", email: "joseph.e@email.com", phone: "+1-555-0139", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 2:45 PM", avatar: "/media/avatar.png" },
    { name: "Aria Collins", email: "aria.c@email.com", phone: "+1-555-0140", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 2:00 PM", avatar: "/media/avatar.png" },
    { name: "Samuel Stewart", email: "samuel.s@email.com", phone: "+1-555-0141", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 1:15 PM", avatar: "/media/avatar.png" },
    { name: "Hannah Morris", email: "hannah.m@email.com", phone: "+1-555-0142", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 12:30 PM", avatar: "/media/avatar.png" },
    { name: "Nicholas Rogers", email: "nick.r@email.com", phone: "+1-555-0143", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 11:45 AM", avatar: "/media/avatar.png" },
    { name: "Ella Peterson", email: "ella.p@email.com", phone: "+1-555-0144", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 11:00 AM", avatar: "/media/avatar.png" },
    { name: "Dylan Reed", email: "dylan.r@email.com", phone: "+1-555-0145", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 10:15 AM", avatar: "/media/avatar.png" },
    { name: "Penelope Cook", email: "penelope.c@email.com", phone: "+1-555-0146", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 6:30 PM", avatar: "/media/avatar.png" },
    { name: "Nathan Murphy", email: "nathan.m@email.com", phone: "+1-555-0147", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 5:45 PM", avatar: "/media/avatar.png" },
    { name: "Layla Bell", email: "layla.b@email.com", phone: "+1-555-0148", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 5:00 PM", avatar: "/media/avatar.png" },
    { name: "Owen Cooper", email: "owen.c@email.com", phone: "+1-555-0149", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 4:15 PM", avatar: "/media/avatar.png" },
    { name: "Marie Bailey", email: "marie.bailey@email.com", phone: "+1-555-0150", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 9:15 AM", avatar: "/media/avatar.png" },
    { name: "Robert Ward", email: "robert.ward@email.com", phone: "+1-555-0151", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 8:30 AM", avatar: "/media/avatar.png" },
    { name: "Luna Torres", email: "luna.torres@email.com", phone: "+1-555-0152", addedBy: "Kartikey Mishra", lastMessage: "July 10, 2024, 7:45 PM", avatar: "/media/avatar.png" }
];

// Generate 5000+ customer records by repeating the base data with unique IDs
const generateCustomerData = () => {
    const customerData = [];
    const totalRecords = 1000000; // Generate 1000000 records

    for (let i = 1; i <= totalRecords; i++) {
        const baseIndex = (i - 1) % baseCustomers.length;
        const baseCustomer = baseCustomers[baseIndex];

        // Create unique email and phone for each record
        const uniqueEmail = baseCustomer.email.replace('@email.com', `${i}@email.com`);
        const uniquePhone = baseCustomer.phone.slice(0, -4) + String(i).padStart(4, '0');

        customerData.push({
            id: i,
            name: baseCustomer.name,
            email: uniqueEmail,
            phone: uniquePhone,
            addedBy: baseCustomer.addedBy,
            lastMessage: baseCustomer.lastMessage,
            avatar: baseCustomer.avatar
        });
    }

    return customerData;
};

const customerData = generateCustomerData();

export default customerData;