import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// import { updateCollections } from '../../redux/shop/shop.actions.js';
import { fetchcollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ match, isCollectionsFetching, fetchcollectionsStartAsync, isCollectionsLoaded }) => {
    
    // const [isLoading, setIsLoading] = useState(true);


    // // let unsubscribeFormSnapshot = useRef(null);

    // useEffect(() => {
    //     const collectionRef = firestore.collection('collections');

    //     // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-2391e/databases/(default)/documents/collections')
    //     //     .then(response => response.json())
    //     //     .then(collections => console.log(collections));

    //     // // unsubscribeFormSnapshot.current = collectionRef.onSnapshot(async snapshot => {
    //     collectionRef.get().then(async snapshot => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         updateCollections(collectionsMap);

    //         setIsLoading(false);
    //     });
    // }, [updateCollections]);


    useEffect(() => {
        fetchcollectionsStartAsync();
    }, [fetchcollectionsStartAsync]);


    return (
        <div className="shop-page">
            <Route 
                exact 
                path={`${match.path}`} 
                // render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />} 
                render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />}
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                // render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} 
                render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} 
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    // updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
    fetchcollectionsStartAsync: () => (dispatch(fetchcollectionsStartAsync()))
});


export default connect(mapStateToProps ,mapDispatchToProps)(Shop);