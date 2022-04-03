export default interface IJob {
  title: string;
  description: string;
  location: string;
  published: Date;
  company: string;
  guid: number;
  url: string;
  applied: boolean;
  type: string;
}
