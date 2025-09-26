const customerData = [
    {
        id: 1, name: "John Smith", email: "john.smith@email.com", phone: "+1-555-0101", addedBy: "Admin", lastMessage: "2024-07-15 14:30", avatar: "JS"
    },
    {
        id: 2, name: "Sarah Johnson", email: "sarah.j@email.com", phone: "+1-555-0102", addedBy: "Manager", lastMessage: "2024-07-15 13:45", avatar: "SJ"
    },
    {
        id: 3, name: "Mike Wilson", email: "mike.wilson@email.com", phone: "+1-555-0103", addedBy: "Admin", lastMessage: "2024-07-15 12:20", avatar: "MW"
    },
    {
        id: 4, name: "Emily Davis", email: "emily.davis@email.com", phone: "+1-555-0104", addedBy: "Support", lastMessage: "2024-07-15 11:15", avatar: "ED"
    },
    {
        id: 5, name: "David Brown", email: "david.brown@email.com", phone: "+1-555-0105", addedBy: "Admin", lastMessage: "2024-07-15 10:30", avatar: "DB"
    },
    {
        id: 6, name: "Lisa Anderson", email: "lisa.a@email.com", phone: "+1-555-0106", addedBy: "Manager", lastMessage: "2024-07-15 09:45", avatar: "LA"
    },
    {
        id: 7, name: "Robert Taylor", email: "robert.taylor@email.com", phone: "+1-555-0107", addedBy: "Support", lastMessage: "2024-07-15 09:00", avatar: "RT"
    },
    {
        id: 8, name: "Jennifer White", email: "jennifer.w@email.com", phone: "+1-555-0108", addedBy: "Admin", lastMessage: "2024-07-15 08:30", avatar: "JW"
    },
    {
        id: 9, name: "Christopher Lee", email: "chris.lee@email.com", phone: "+1-555-0109", addedBy: "Manager", lastMessage: "2024-07-15 08:00", avatar: "CL"
    },
    {
        id: 10, name: "Amanda Garcia", email: "amanda.garcia@email.com", phone: "+1-555-0110", addedBy: "Support", lastMessage: "2024-07-15 07:45", avatar: "AG"
    },
    {
        id: 11, name: "James Martinez", email: "james.martinez@email.com", phone: "+1-555-0111", addedBy: "Admin", lastMessage: "2024-07-14 16:20", avatar: "JM"
    },
    {
        id: 12, name: "Mary Rodriguez", email: "mary.rodriguez@email.com", phone: "+1-555-0112", addedBy: "Manager", lastMessage: "2024-07-14 15:30", avatar: "MR"
    },
    {
        id: 13, name: "Daniel Thompson", email: "daniel.t@email.com", phone: "+1-555-0113", addedBy: "Support", lastMessage: "2024-07-14 14:45", avatar: "DT"
    },
    {
        id: 14, name: "Patricia Moore", email: "patricia.moore@email.com", phone: "+1-555-0114", addedBy: "Admin", lastMessage: "2024-07-14 13:15", avatar: "PM"
    },
    {
        id: 15, name: "Mark Jackson", email: "mark.jackson@email.com", phone: "+1-555-0115", addedBy: "Manager", lastMessage: "2024-07-14 12:30", avatar: "MJ"
    },
    {
        id: 16, name: "Linda Clark", email: "linda.clark@email.com", phone: "+1-555-0116", addedBy: "Support", lastMessage: "2024-07-14 11:20", avatar: "LC"
    },
    {
        id: 17, name: "Paul Lewis", email: "paul.lewis@email.com", phone: "+1-555-0117", addedBy: "Admin", lastMessage: "2024-07-14 10:45", avatar: "PL"
    },
    {
        id: 18, name: "Nancy Walker", email: "nancy.walker@email.com", phone: "+1-555-0118", addedBy: "Manager", lastMessage: "2024-07-14 10:00", avatar: "NW"
    },
    {
        id: 19, name: "Steven Hall", email: "steven.hall@email.com", phone: "+1-555-0119", addedBy: "Support", lastMessage: "2024-07-14 09:30", avatar: "SH"
    },
    {
        id: 20, name: "Karen Allen", email: "karen.allen@email.com", phone: "+1-555-0120", addedBy: "Admin", lastMessage: "2024-07-14 09:00", avatar: "KA"
    },
    {
        id: 21, name: "Kevin Young", email: "kevin.young@email.com", phone: "+1-555-0121", addedBy: "Manager", lastMessage: "2024-07-14 08:15", avatar: "KY"
    },
    {
        id: 22, name: "Betty King", email: "betty.king@email.com", phone: "+1-555-0122", addedBy: "Support", lastMessage: "2024-07-14 07:45", avatar: "BK"
    },
    {
        id: 23, name: "Gary Wright", email: "gary.wright@email.com", phone: "+1-555-0123", addedBy: "Admin", lastMessage: "2024-07-13 16:30", avatar: "GW"
    },
    {
        id: 24, name: "Helen Lopez", email: "helen.lopez@email.com", phone: "+1-555-0124", addedBy: "Manager", lastMessage: "2024-07-13 15:45", avatar: "HL"
    },
    {
        id: 25, name: "Anthony Hill", email: "anthony.hill@email.com", phone: "+1-555-0125", addedBy: "Support", lastMessage: "2024-07-13 14:20", avatar: "AH"
    },
    {
        id: 26, name: "Sandra Green", email: "sandra.green@email.com", phone: "+1-555-0126", addedBy: "Admin", lastMessage: "2024-07-13 13:30", avatar: "SG"
    },
    {
        id: 27, name: "Ronald Adams", email: "ronald.adams@email.com", phone: "+1-555-0127", addedBy: "Manager", lastMessage: "2024-07-13 12:15", avatar: "RA"
    },
    {
        id: 28, name: "Donna Baker", email: "donna.baker@email.com", phone: "+1-555-0128", addedBy: "Support", lastMessage: "2024-07-13 11:45", avatar: "DB"
    },
    {
        id: 29, name: "Ryan Nelson", email: "ryan.nelson@email.com", phone: "+1-555-0129", addedBy: "Admin", lastMessage: "2024-07-13 10:30", avatar: "RN"
    },
    {
        id: 30, name: "Carol Carter", email: "carol.carter@email.com", phone: "+1-555-0130", addedBy: "Manager", lastMessage: "2024-07-13 09:45", avatar: "CC"
    },
    {
        id: 31, name: "Timothy Mitchell", email: "timothy.mitchell@email.com", phone: "+1-555-0131", addedBy: "Support", lastMessage: "2024-07-13 09:00", avatar: "TM"
    },
    {
        id: 32, name: "Sharon Perez", email: "sharon.perez@email.com", phone: "+1-555-0132", addedBy: "Admin", lastMessage: "2024-07-13 08:30", avatar: "SP"
    },
    {
        id: 33, name: "Jason Roberts", email: "jason.roberts@email.com", phone: "+1-555-0133", addedBy: "Manager", lastMessage: "2024-07-12 16:15", avatar: "JR"
    },
    {
        id: 34, name: "Michelle Turner", email: "michelle.turner@email.com", phone: "+1-555-0134", addedBy: "Support", lastMessage: "2024-07-12 15:30", avatar: "MT"
    },
    {
        id: 35, name: "Kenneth Phillips", email: "kenneth.phillips@email.com", phone: "+1-555-0135", addedBy: "Admin", lastMessage: "2024-07-12 14:45", avatar: "KP"
    },
    {
        id: 36, name: "Kimberly Campbell", email: "kimberly.campbell@email.com", phone: "+1-555-0136", addedBy: "Manager", lastMessage: "2024-07-12 13:20", avatar: "KC"
    },
    {
        id: 37, name: "Joshua Parker", email: "joshua.parker@email.com", phone: "+1-555-0137", addedBy: "Support", lastMessage: "2024-07-12 12:30", avatar: "JP"
    },
    {
        id: 38, name: "Deborah Evans", email: "deborah.evans@email.com", phone: "+1-555-0138", addedBy: "Admin", lastMessage: "2024-07-12 11:45", avatar: "DE"
    },
    {
        id: 39, name: "Brian Edwards", email: "brian.edwards@email.com", phone: "+1-555-0139", addedBy: "Manager", lastMessage: "2024-07-12 10:15", avatar: "BE"
    },
    {
        id: 40, name: "Amy Collins", email: "amy.collins@email.com", phone: "+1-555-0140", addedBy: "Support", lastMessage: "2024-07-12 09:30", avatar: "AC"
    },
    {
        id: 41, name: "Edward Stewart", email: "edward.stewart@email.com", phone: "+1-555-0141", addedBy: "Admin", lastMessage: "2024-07-12 08:45", avatar: "ES"
    },
    {
        id: 42, name: "Brenda Sanchez", email: "brenda.sanchez@email.com", phone: "+1-555-0142", addedBy: "Manager", lastMessage: "2024-07-11 16:20", avatar: "BS"
    },
    {
        id: 43, name: "Wayne Morris", email: "wayne.morris@email.com", phone: "+1-555-0143", addedBy: "Support", lastMessage: "2024-07-11 15:15", avatar: "WM"
    },
    {
        id: 44, name: "Angela Rogers", email: "angela.rogers@email.com", phone: "+1-555-0144", addedBy: "Admin", lastMessage: "2024-07-11 14:30", avatar: "AR"
    },
    {
        id: 45, name: "Ralph Reed", email: "ralph.reed@email.com", phone: "+1-555-0145", addedBy: "Manager", lastMessage: "2024-07-11 13:45", avatar: "RR"
    },
    {
        id: 46, name: "Janet Cook", email: "janet.cook@email.com", phone: "+1-555-0146", addedBy: "Support", lastMessage: "2024-07-11 12:20", avatar: "JC"
    },
    {
        id: 47, name: "Arthur Morgan", email: "arthur.morgan@email.com", phone: "+1-555-0147", addedBy: "Admin", lastMessage: "2024-07-11 11:30", avatar: "AM"
    },
    {
        id: 48, name: "Frances Bell", email: "frances.bell@email.com", phone: "+1-555-0148", addedBy: "Manager", lastMessage: "2024-07-11 10:45", avatar: "FB"
    },
    {
        id: 49, name: "Harold Murphy", email: "harold.murphy@email.com", phone: "+1-555-0149", addedBy: "Support", lastMessage: "2024-07-11 10:00", avatar: "HM"
    },
    {
        id: 50, name: "Marie Bailey", email: "marie.bailey@email.com", phone: "+1-555-0150", addedBy: "Admin", lastMessage: "2024-07-11 09:15", avatar: "MB"
    },
    {
        id: 1, name: "John Smith", email: "john.smith@email.com", phone: "+1-555-0101", addedBy: "Admin", lastMessage: "2024-07-15 14:30", avatar: "JS"
    },
    {
        id: 2, name: "Sarah Johnson", email: "sarah.j@email.com", phone: "+1-555-0102", addedBy: "Manager", lastMessage: "2024-07-15 13:45", avatar: "SJ"
    },
    {
        id: 3, name: "Mike Wilson", email: "mike.wilson@email.com", phone: "+1-555-0103", addedBy: "Admin", lastMessage: "2024-07-15 12:20", avatar: "MW"
    },
    {
        id: 4, name: "Emily Davis", email: "emily.davis@email.com", phone: "+1-555-0104", addedBy: "Support", lastMessage: "2024-07-15 11:15", avatar: "ED"
    },
    {
        id: 5, name: "David Brown", email: "david.brown@email.com", phone: "+1-555-0105", addedBy: "Admin", lastMessage: "2024-07-15 10:30", avatar: "DB"
    },
    {
        id: 6, name: "Lisa Anderson", email: "lisa.a@email.com", phone: "+1-555-0106", addedBy: "Manager", lastMessage: "2024-07-15 09:45", avatar: "LA"
    },
    {
        id: 7, name: "Robert Taylor", email: "robert.taylor@email.com", phone: "+1-555-0107", addedBy: "Support", lastMessage: "2024-07-15 09:00", avatar: "RT"
    },
    {
        id: 8, name: "Jennifer White", email: "jennifer.w@email.com", phone: "+1-555-0108", addedBy: "Admin", lastMessage: "2024-07-15 08:30", avatar: "JW"
    },
    {
        id: 9, name: "Christopher Lee", email: "chris.lee@email.com", phone: "+1-555-0109", addedBy: "Manager", lastMessage: "2024-07-15 08:00", avatar: "CL"
    },
    {
        id: 10, name: "Amanda Garcia", email: "amanda.garcia@email.com", phone: "+1-555-0110", addedBy: "Support", lastMessage: "2024-07-15 07:45", avatar: "AG"
    },
    {
        id: 11, name: "James Martinez", email: "james.martinez@email.com", phone: "+1-555-0111", addedBy: "Admin", lastMessage: "2024-07-14 16:20", avatar: "JM"
    },
    {
        id: 12, name: "Mary Rodriguez", email: "mary.rodriguez@email.com", phone: "+1-555-0112", addedBy: "Manager", lastMessage: "2024-07-14 15:30", avatar: "MR"
    },
    {
        id: 13, name: "Daniel Thompson", email: "daniel.t@email.com", phone: "+1-555-0113", addedBy: "Support", lastMessage: "2024-07-14 14:45", avatar: "DT"
    },
    {
        id: 14, name: "Patricia Moore", email: "patricia.moore@email.com", phone: "+1-555-0114", addedBy: "Admin", lastMessage: "2024-07-14 13:15", avatar: "PM"
    },
    {
        id: 15, name: "Mark Jackson", email: "mark.jackson@email.com", phone: "+1-555-0115", addedBy: "Manager", lastMessage: "2024-07-14 12:30", avatar: "MJ"
    },
    {
        id: 16, name: "Linda Clark", email: "linda.clark@email.com", phone: "+1-555-0116", addedBy: "Support", lastMessage: "2024-07-14 11:20", avatar: "LC"
    },
    {
        id: 17, name: "Paul Lewis", email: "paul.lewis@email.com", phone: "+1-555-0117", addedBy: "Admin", lastMessage: "2024-07-14 10:45", avatar: "PL"
    },
    {
        id: 18, name: "Nancy Walker", email: "nancy.walker@email.com", phone: "+1-555-0118", addedBy: "Manager", lastMessage: "2024-07-14 10:00", avatar: "NW"
    },
    {
        id: 19, name: "Steven Hall", email: "steven.hall@email.com", phone: "+1-555-0119", addedBy: "Support", lastMessage: "2024-07-14 09:30", avatar: "SH"
    },
    {
        id: 20, name: "Karen Allen", email: "karen.allen@email.com", phone: "+1-555-0120", addedBy: "Admin", lastMessage: "2024-07-14 09:00", avatar: "KA"
    },
    {
        id: 21, name: "Kevin Young", email: "kevin.young@email.com", phone: "+1-555-0121", addedBy: "Manager", lastMessage: "2024-07-14 08:15", avatar: "KY"
    },
    {
        id: 22, name: "Betty King", email: "betty.king@email.com", phone: "+1-555-0122", addedBy: "Support", lastMessage: "2024-07-14 07:45", avatar: "BK"
    },
    {
        id: 23, name: "Gary Wright", email: "gary.wright@email.com", phone: "+1-555-0123", addedBy: "Admin", lastMessage: "2024-07-13 16:30", avatar: "GW"
    },
    {
        id: 24, name: "Helen Lopez", email: "helen.lopez@email.com", phone: "+1-555-0124", addedBy: "Manager", lastMessage: "2024-07-13 15:45", avatar: "HL"
    },
    {
        id: 25, name: "Anthony Hill", email: "anthony.hill@email.com", phone: "+1-555-0125", addedBy: "Support", lastMessage: "2024-07-13 14:20", avatar: "AH"
    },
    {
        id: 26, name: "Sandra Green", email: "sandra.green@email.com", phone: "+1-555-0126", addedBy: "Admin", lastMessage: "2024-07-13 13:30", avatar: "SG"
    },
    {
        id: 27, name: "Ronald Adams", email: "ronald.adams@email.com", phone: "+1-555-0127", addedBy: "Manager", lastMessage: "2024-07-13 12:15", avatar: "RA"
    },
    {
        id: 28, name: "Donna Baker", email: "donna.baker@email.com", phone: "+1-555-0128", addedBy: "Support", lastMessage: "2024-07-13 11:45", avatar: "DB"
    },
    {
        id: 29, name: "Ryan Nelson", email: "ryan.nelson@email.com", phone: "+1-555-0129", addedBy: "Admin", lastMessage: "2024-07-13 10:30", avatar: "RN"
    },
    {
        id: 30, name: "Carol Carter", email: "carol.carter@email.com", phone: "+1-555-0130", addedBy: "Manager", lastMessage: "2024-07-13 09:45", avatar: "CC"
    },
    {
        id: 31, name: "Timothy Mitchell", email: "timothy.mitchell@email.com", phone: "+1-555-0131", addedBy: "Support", lastMessage: "2024-07-13 09:00", avatar: "TM"
    },
    {
        id: 32, name: "Sharon Perez", email: "sharon.perez@email.com", phone: "+1-555-0132", addedBy: "Admin", lastMessage: "2024-07-13 08:30", avatar: "SP"
    },
    {
        id: 33, name: "Jason Roberts", email: "jason.roberts@email.com", phone: "+1-555-0133", addedBy: "Manager", lastMessage: "2024-07-12 16:15", avatar: "JR"
    },
    {
        id: 34, name: "Michelle Turner", email: "michelle.turner@email.com", phone: "+1-555-0134", addedBy: "Support", lastMessage: "2024-07-12 15:30", avatar: "MT"
    },
    {
        id: 35, name: "Kenneth Phillips", email: "kenneth.phillips@email.com", phone: "+1-555-0135", addedBy: "Admin", lastMessage: "2024-07-12 14:45", avatar: "KP"
    },
    {
        id: 36, name: "Kimberly Campbell", email: "kimberly.campbell@email.com", phone: "+1-555-0136", addedBy: "Manager", lastMessage: "2024-07-12 13:20", avatar: "KC"
    },
    {
        id: 37, name: "Joshua Parker", email: "joshua.parker@email.com", phone: "+1-555-0137", addedBy: "Support", lastMessage: "2024-07-12 12:30", avatar: "JP"
    },
    {
        id: 38, name: "Deborah Evans", email: "deborah.evans@email.com", phone: "+1-555-0138", addedBy: "Admin", lastMessage: "2024-07-12 11:45", avatar: "DE"
    },
    {
        id: 39, name: "Brian Edwards", email: "brian.edwards@email.com", phone: "+1-555-0139", addedBy: "Manager", lastMessage: "2024-07-12 10:15", avatar: "BE"
    },
    {
        id: 40, name: "Amy Collins", email: "amy.collins@email.com", phone: "+1-555-0140", addedBy: "Support", lastMessage: "2024-07-12 09:30", avatar: "AC"
    },
    {
        id: 41, name: "Edward Stewart", email: "edward.stewart@email.com", phone: "+1-555-0141", addedBy: "Admin", lastMessage: "2024-07-12 08:45", avatar: "ES"
    },
    {
        id: 42, name: "Brenda Sanchez", email: "brenda.sanchez@email.com", phone: "+1-555-0142", addedBy: "Manager", lastMessage: "2024-07-11 16:20", avatar: "BS"
    },
    {
        id: 43, name: "Wayne Morris", email: "wayne.morris@email.com", phone: "+1-555-0143", addedBy: "Support", lastMessage: "2024-07-11 15:15", avatar: "WM"
    },
    {
        id: 44, name: "Angela Rogers", email: "angela.rogers@email.com", phone: "+1-555-0144", addedBy: "Admin", lastMessage: "2024-07-11 14:30", avatar: "AR"
    },
    {
        id: 45, name: "Ralph Reed", email: "ralph.reed@email.com", phone: "+1-555-0145", addedBy: "Manager", lastMessage: "2024-07-11 13:45", avatar: "RR"
    },
    {
        id: 46, name: "Janet Cook", email: "janet.cook@email.com", phone: "+1-555-0146", addedBy: "Support", lastMessage: "2024-07-11 12:20", avatar: "JC"
    },
    {
        id: 47, name: "Arthur Morgan", email: "arthur.morgan@email.com", phone: "+1-555-0147", addedBy: "Admin", lastMessage: "2024-07-11 11:30", avatar: "AM"
    },
    {
        id: 48, name: "Frances Bell", email: "frances.bell@email.com", phone: "+1-555-0148", addedBy: "Manager", lastMessage: "2024-07-11 10:45", avatar: "FB"
    },
    {
        id: 49, name: "Harold Murphy", email: "harold.murphy@email.com", phone: "+1-555-0149", addedBy: "Support", lastMessage: "2024-07-11 10:00", avatar: "HM"
    },
    {
        id: 50, name: "Marie Bailey", email: "marie.bailey@email.com", phone: "+1-555-0150", addedBy: "Admin", lastMessage: "2024-07-11 09:15", avatar: "MB"
    },
];

export default customerData;