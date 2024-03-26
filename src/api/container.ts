import axios from 'axios';

export function getContainerList() {
  return axios.get('/api/container');
}

export function getContainerById(params: any) {
  return axios.get('/api/container/get', { params });
}
