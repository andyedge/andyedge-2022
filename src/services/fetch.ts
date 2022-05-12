import client from './contentful'
import { adaptWhatpage } from './responseAdapter'

export const getWhatpage = async () => adaptWhatpage(await client.getEntries({ 
    content_type: 'whatPage',
    include: 10
}))