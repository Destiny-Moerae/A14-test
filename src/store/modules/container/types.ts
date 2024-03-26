export interface container {
  podId: number;
  cpuReq: number;
  cpuLimit: number;
  memoryReq: number;
  memoryLimit: number;
  passwd: string;
  podName: string;
  hostName: string;
  containerName: null;
  imageId: null | number;
  imagePullPolicy: string;
  labels: string;
}
