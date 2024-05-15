import { useSelector } from 'react-redux';
import { AmiiboState } from '../../types/Amiibo';
import Breadcrumb from '../shared/Breadcrumb';

// Styles
import { BannerHero, ColMd8, ColMd4 } from './AmiiboListStyles';

const AmiiboDetail = () => {
    const selectedAmiibo = useSelector((state: AmiiboState) => state.amiibo.selectedAmiibo);

    return (
        <div>
            <Breadcrumb
                paths={[
                    { url: '/', name: 'Home' },
                    { url: '/amiibos', name: 'Amiibos' },
                    { url: `/amiibos/${selectedAmiibo?.tail}-${selectedAmiibo?.head}`, name: selectedAmiibo?.name}
                ]}
                currentUrl={`/amiibos/${selectedAmiibo?.tail}-${selectedAmiibo?.head}`}
            />
            <BannerHero>
                <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <ColMd4>
                        <div style={{ paddingRight: '40px'}} >
                            <img src={selectedAmiibo?.image} alt="Mario" style={{ height: 'auto', width: '100%' }} />
                        </div>
                    </ColMd4>
                    <ColMd8>
                        <div>
                            <h1>{selectedAmiibo?.name}</h1>
                            <p>Character: {selectedAmiibo?.character}</p>
                            <p>Game Series: {selectedAmiibo?.gameSeries}</p>
                            <p>Amiibo Series: {selectedAmiibo?.amiiboSeries}</p>
                        </div>
                    </ColMd8>
                </div>
            </BannerHero>
        </div>
    );
};

export default AmiiboDetail;