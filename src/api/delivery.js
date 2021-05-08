import api from './api';

class DeliverApi {
  constructor(api) {
    this.api = api;
    this.path = '/delivery'
  }
  addDriverData = (data) => {
    return this.api.putRequest(this.path + `/addDeliveryPerson`, data);
  }
  updateDeliveryInstructions = (instructions = []) => {
    return this.api.postRequest(this.path + `/updateDeliveryInstructions`, {instructions});
  }
  getCustomersWithInstructions = () => {
    return this.api.get(this.path + `/getCustomersWithInstructions`);
  }
}

const deliveryApi = new DeliverApi(api);

export default deliveryApi;