import { observable} from "mobx";

class MainStore {

    @observable Basar = "Yarrak Kafali"
    
}

const store = new MainStore()

export default store;