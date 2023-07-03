class User {
    constructor(name, surname, age, place, gender) {
      this.firstName = name
      this.lastName = surname
      this.age = age
      this.location = place
      this.gender = gender
      this.ageComparison = function (...users) {
        for (let user of users) {
          if (this.gender === "male" && this.age > user.age) {
            console.log(`${this.firstName} è più vecchio di ${user.firstName}`)
          } else if (this.gender === "female" && this.age > user.age) {
            console.log(`${this.firstName} è più vecchia di ${user.firstName}`)
          } else if (this.age === user.age) {
            console.log(
              `${this.firstName} e ${user.firstName} hanno la stessa età`
            )
          } else {
            console.log(`${this.firstName} è più giovane di ${user.firstName}`)
          }
        }
      }
    }
  }
  
  const u1 = new User("Rafael", "Leao", 24, "Milan", "male")
  const u2 = new User("Sergej", "Milinkovic-Savic", 28, "Lazio", "male")
  const u3 = new User("Davide", "Frattesi", 23, "Lazio", "male")
  const u4 = new User("Tammy", "Abraham", 25, "Roma", "male")
  u3.ageComparison(u1, u2, u4)