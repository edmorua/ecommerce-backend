import express from 'express';
import Test  from '../models/test.model';
import testService from '../services/test.service';
import { reportError } from '../utils/Error';
import { CODES_RESPONSE } from '../utils/constants/responseCode';

class TestController {

  async getTestById(req: express.Request, res: express.Response) {
    const data = req.params;
    const { id } = data;
    if (!id) throw new Error('no id found in the request');

    const test = await testService.getTestById(Number(id));
    if (test) return res.status(CODES_RESPONSE.SUCCESS).json(test);

    return res.status(CODES_RESPONSE.NOT_FOUND).json({ error: 'not found' });
  }

  async createTest(req: express.Request, res: express.Response) {
    const data = req.body;
		console.log({data});
    if (!data) return res.status(CODES_RESPONSE.BAD_REQUEST).json({error: 'No body found'})
    const { test } = data;
    if (!test) return res.status(CODES_RESPONSE.BAD_REQUEST).json({error: 'No test data found'})
    const newTest = await testService.create(test as Test);
    return res.status(CODES_RESPONSE.SUCCESS).json({ newTest });
  }

  async getAll(res: express.Response) {
    const allTest = await testService.getAllTest();
    return res.status(CODES_RESPONSE.SUCCESS).json(allTest);
  }

}
const testController = new TestController();
export default testController;
