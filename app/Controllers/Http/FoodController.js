'use strict'

const Food = use('App/Models/Food')

class FoodController {

  async index ({ request, response, view }) {
    const foods = await Food.query().paginate(1)

    return foods
  }

  async store ({ request, response, auth }) {

    const data = request.only(['description', 'protein', 'fat', 'carbo'])
    data.user_id = auth.user.id

    await Food.create(data)

    return response.send()
  }


  async show ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
    const food = await Food.find(params.id);
    const data = request.only(['description', 'fat', 'protein', 'carbo']);

    food.merge(data)
    await food.save()


    return response.send(food);
  }


  async destroy ({ params, request, response }) {

  }
}

module.exports = FoodController
