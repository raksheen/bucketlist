# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ideas = Idea.create(
  [
    {
      title: "Acadia National Park", 
      text: "Looks beautiful!",
      image: "https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Acadia-National-Park.jpeg",
      state: "New York"
    },
    {
      title: "Key West", 
      text: "Want to go again",
      image: "https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Acadia-National-Park.jpeg",
      state: "Florida"
    },
    {
      title: "San Juan", 
      text: "Really want to do Biolumniscent Kayaking",
      image: "https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Acadia-National-Park.jpeg",
      state: "Puerto Rico"
    },
    {
      title: "Nashville", 
      text: "Made of chocolate",
      image: "https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Acadia-National-Park.jpeg",
      state: "Tennessee"
    }
  ])