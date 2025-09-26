const baseCustomers = [
    { name: "John Smith", email: "john.smith@email.com", phone: "+91-98765-43210", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 2:30 PM", avatar: "/media/avatar.png", score: 85 },
    { name: "Sarah Johnson", email: "sarah.j@email.com", phone: "+91-97654-32101", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 1:45 PM", avatar: "/media/avatar.png", score: 92 },
    { name: "Mike Wilson", email: "mike.wilson@email.com", phone: "+91-96543-21012", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 12:20 PM", avatar: "/media/avatar.png", score: 78 },
    { name: "Emily Davis", email: "emily.davis@email.com", phone: "+91-95432-10123", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 11:15 AM", avatar: "/media/avatar.png", score: 88 },
    { name: "David Brown", email: "david.brown@email.com", phone: "+91-94321-01234", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 10:30 AM", avatar: "/media/avatar.png", score: 73 },
    { name: "Sophia Miller", email: "sophia.m@email.com", phone: "+91-93210-12345", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 9:50 AM", avatar: "/media/avatar.png", score: 95 },
    { name: "James Anderson", email: "james.a@email.com", phone: "+91-92101-23456", addedBy: "Kartikey Mishra", lastMessage: "July 15, 2024, 9:00 AM", avatar: "/media/avatar.png", score: 81 },
    { name: "Olivia Taylor", email: "olivia.t@email.com", phone: "+91-91012-34567", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 6:30 PM", avatar: "/media/avatar.png", score: 87 },
    { name: "William Moore", email: "william.m@email.com", phone: "+91-90123-45678", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 5:45 PM", avatar: "/media/avatar.png", score: 76 },
    { name: "Isabella Thomas", email: "isabella.t@email.com", phone: "+91-89012-34567", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 5:00 PM", avatar: "/media/avatar.png", score: 90 },
    { name: "Ethan Jackson", email: "ethan.j@email.com", phone: "+91-88901-23456", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 4:15 PM", avatar: "/media/avatar.png", score: 82 },
    { name: "Ava White", email: "ava.w@email.com", phone: "+91-87890-12345", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 3:30 PM", avatar: "/media/avatar.png", score: 89 },
    { name: "Alexander Harris", email: "alex.h@email.com", phone: "+91-86789-01234", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 2:45 PM", avatar: "/media/avatar.png", score: 74 },
    { name: "Mia Martin", email: "mia.m@email.com", phone: "+91-85678-90123", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 2:00 PM", avatar: "/media/avatar.png", score: 93 },
    { name: "Benjamin Lee", email: "ben.lee@email.com", phone: "+91-84567-89012", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 1:15 PM", avatar: "/media/avatar.png", score: 79 },
    { name: "Charlotte Perez", email: "charlotte.p@email.com", phone: "+91-83456-78901", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 12:30 PM", avatar: "/media/avatar.png", score: 86 },
    { name: "Daniel King", email: "daniel.k@email.com", phone: "+91-82345-67890", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 11:45 AM", avatar: "/media/avatar.png", score: 91 },
    { name: "Amelia Wright", email: "amelia.w@email.com", phone: "+91-81234-56789", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 11:00 AM", avatar: "/media/avatar.png", score: 77 },
    { name: "Matthew Scott", email: "matthew.s@email.com", phone: "+91-80123-45678", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 10:15 AM", avatar: "/media/avatar.png", score: 84 },
    { name: "Harper Green", email: "harper.g@email.com", phone: "+91-79012-34567", addedBy: "Kartikey Mishra", lastMessage: "July 14, 2024, 9:30 AM", avatar: "/media/avatar.png", score: 88 },
    { name: "Lucas Hall", email: "lucas.h@email.com", phone: "+91-78901-23456", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 6:30 PM", avatar: "/media/avatar.png", score: 75 },
    { name: "Evelyn Allen", email: "evelyn.a@email.com", phone: "+91-77890-12345", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 5:45 PM", avatar: "/media/avatar.png", score: 92 },
    { name: "Jack Young", email: "jack.y@email.com", phone: "+91-76789-01234", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 5:00 PM", avatar: "/media/avatar.png", score: 80 },
    { name: "Abigail Hernandez", email: "abigail.h@email.com", phone: "+91-75678-90123", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 4:15 PM", avatar: "/media/avatar.png", score: 87 },
    { name: "Henry Lopez", email: "henry.l@email.com", phone: "+91-74567-89012", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 3:30 PM", avatar: "/media/avatar.png", score: 83 },
    { name: "Grace Hill", email: "grace.h@email.com", phone: "+91-73456-78901", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 2:45 PM", avatar: "/media/avatar.png", score: 89 },
    { name: "Sebastian Adams", email: "sebastian.a@email.com", phone: "+91-72345-67890", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 2:00 PM", avatar: "/media/avatar.png", score: 76 },
    { name: "Chloe Baker", email: "chloe.b@email.com", phone: "+91-71234-56789", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 1:15 PM", avatar: "/media/avatar.png", score: 94 },
    { name: "David Gonzalez", email: "david.g@email.com", phone: "+91-70123-45678", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 12:30 PM", avatar: "/media/avatar.png", score: 81 },
    { name: "Lily Nelson", email: "lily.n@email.com", phone: "+91-69012-34567", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 11:45 AM", avatar: "/media/avatar.png", score: 85 },
    { name: "Andrew Carter", email: "andrew.c@email.com", phone: "+91-68901-23456", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 11:00 AM", avatar: "/media/avatar.png", score: 78 },
    { name: "Zoe Mitchell", email: "zoe.m@email.com", phone: "+91-67890-12345", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 10:15 AM", avatar: "/media/avatar.png", score: 90 },
    { name: "Christopher Roberts", email: "chris.r@email.com", phone: "+91-66789-01234", addedBy: "Kartikey Mishra", lastMessage: "July 13, 2024, 9:30 AM", avatar: "/media/avatar.png", score: 82 },
    { name: "Ella Turner", email: "ella.t@email.com", phone: "+91-65678-90123", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 6:30 PM", avatar: "/media/avatar.png", score: 88 },
    { name: "Joshua Phillips", email: "josh.p@email.com", phone: "+91-64567-89012", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 5:45 PM", avatar: "/media/avatar.png", score: 77 },
    { name: "Scarlett Campbell", email: "scarlett.c@email.com", phone: "+91-63456-78901", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 5:00 PM", avatar: "/media/avatar.png", score: 93 },
    { name: "Anthony Parker", email: "anthony.p@email.com", phone: "+91-62345-67890", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 4:15 PM", avatar: "/media/avatar.png", score: 79 },
    { name: "Victoria Evans", email: "victoria.e@email.com", phone: "+91-61234-56789", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 3:30 PM", avatar: "/media/avatar.png", score: 86 },
    { name: "Joseph Edwards", email: "joseph.e@email.com", phone: "+91-60123-45678", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 2:45 PM", avatar: "/media/avatar.png", score: 84 },
    { name: "Aria Collins", email: "aria.c@email.com", phone: "+91-59012-34567", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 2:00 PM", avatar: "/media/avatar.png", score: 91 },
    { name: "Samuel Stewart", email: "samuel.s@email.com", phone: "+91-58901-23456", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 1:15 PM", avatar: "/media/avatar.png", score: 75 },
    { name: "Hannah Morris", email: "hannah.m@email.com", phone: "+91-57890-12345", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 12:30 PM", avatar: "/media/avatar.png", score: 89 },
    { name: "Nicholas Rogers", email: "nick.r@email.com", phone: "+91-56789-01234", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 11:45 AM", avatar: "/media/avatar.png", score: 83 },
    { name: "Ella Peterson", email: "ella.p@email.com", phone: "+91-55678-90123", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 11:00 AM", avatar: "/media/avatar.png", score: 87 },
    { name: "Dylan Reed", email: "dylan.r@email.com", phone: "+91-54567-89012", addedBy: "Kartikey Mishra", lastMessage: "July 12, 2024, 10:15 AM", avatar: "/media/avatar.png", score: 80 },
    { name: "Penelope Cook", email: "penelope.c@email.com", phone: "+91-53456-78901", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 6:30 PM", avatar: "/media/avatar.png", score: 92 },
    { name: "Nathan Murphy", email: "nathan.m@email.com", phone: "+91-52345-67890", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 5:45 PM", avatar: "/media/avatar.png", score: 76 },
    { name: "Layla Bell", email: "layla.b@email.com", phone: "+91-51234-56789", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 5:00 PM", avatar: "/media/avatar.png", score: 88 },
    { name: "Owen Cooper", email: "owen.c@email.com", phone: "+91-50123-45678", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 4:15 PM", avatar: "/media/avatar.png", score: 81 },
    { name: "Marie Bailey", email: "marie.bailey@email.com", phone: "+91-49012-34567", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 9:15 AM", avatar: "/media/avatar.png", score: 85 },
    { name: "Robert Ward", email: "robert.ward@email.com", phone: "+91-48901-23456", addedBy: "Kartikey Mishra", lastMessage: "July 11, 2024, 8:30 AM", avatar: "/media/avatar.png", score: 78 },
    { name: "Luna Torres", email: "luna.torres@email.com", phone: "+91-47890-12345", addedBy: "Kartikey Mishra", lastMessage: "July 10, 2024, 7:45 PM", avatar: "/media/avatar.png", score: 94 }
];

// Generate 1000000+ customer records by repeating the base data with unique IDs
const generateCustomerData = () => {
    const customerData = [];
    const totalRecords = 1000000; // Generate 1000000 records

    for (let i = 1; i <= totalRecords; i++) {
        const baseIndex = (i - 1) % baseCustomers.length;
        const baseCustomer = baseCustomers[baseIndex];

        // Create unique email and phone for each record
        const uniqueEmail = baseCustomer.email.replace('@email.com', `${i}@email.com`);
        
        // Generate Indian phone number with proper format
        const phoneBase = Math.floor(Math.random() * 900000000) + 100000000; // 9-digit number starting from 6-9
        const firstDigit = [6, 7, 8, 9][Math.floor(Math.random() * 4)]; // Indian mobile numbers start with 6, 7, 8, or 9
        const uniquePhone = `+91${firstDigit}${phoneBase.toString().slice(1, 6)}${phoneBase.toString().slice(6)}`;
        
        // Generate random score between 50-100
        const score = Math.floor(Math.random() * 51) + 50;

        customerData.push({
            id: i,
            name: baseCustomer.name,
            email: uniqueEmail,
            phone: uniquePhone,
            addedBy: baseCustomer.addedBy,
            lastMessage: baseCustomer.lastMessage,
            avatar: baseCustomer.avatar,
            score: score
        });
    }

    return customerData;
};

const customerData = generateCustomerData();

export default customerData;