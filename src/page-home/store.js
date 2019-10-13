import {action, runInAction, observable} from 'mobx'
import API from '../api'

class Store {
  @observable value = null

  @action Hello = async () => {
    const res = await API.Hello()
    await API.CatsDetail()
  }

  @action getHomeValue = async (id = 1) => {
    try {
      const res = await API.Cats({
        id,
      })
      runInAction(() => {
        this.value = res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export default new Store()