import  { Router } from 'express';

import { createUsernameGet, createUsernamePost, getUsernames } from '../controller/users.js';

const router = Router()

router.get('/', getUsernames)

router.get('/create', createUsernameGet)

router.post('/create', createUsernamePost)

export default router