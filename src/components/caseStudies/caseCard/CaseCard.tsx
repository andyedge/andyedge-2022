import StandardContainer from '../../../models/generic/standardContainer.model'
import Card from '../../cardBullets/Card'

const CaseCard = ({ contents } : { contents : StandardContainer }) => (
    <div>
        <Card contents={contents} wrapStyle={{ marginLeft: 'auto' }}/>
    </div>
)

export default CaseCard