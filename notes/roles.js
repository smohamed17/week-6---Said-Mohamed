let user = {
    name: 'Said',
    password: 'catcher',
    email: 'gg.ggdeals.com',
    roles: ['Boss', 'Admin'],
    contact: {
        office: 'North Loop',
        phone: '6128887344',
    }
}

user.salary = 45000
user.roles.push('server admin')

user.contact.location = 'San Diego'
console.log(user)