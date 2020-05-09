import {observable, action} from 'mobx'
import LoginStore from '../user-login/store'
// extends LoginStore 
class Store extends LoginStore {
  // constructor(props) {
  //   super(props)
  //   console.log('-------frame', this, props)
  // }
  @observable loading = false
  @action setLoading = boolean => {
    this.loading = boolean
  }

  @observable mInfo = {
    name: '',
  }

  static a = 'aaaa'

  @action updateName = name => {
    this.mInfo.name = name
  }
}

export default new Store()