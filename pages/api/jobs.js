// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobsData from '../../data/jobs.json';

export default function handler(req, res) {
  res.status(200).json(jobsData);
}
