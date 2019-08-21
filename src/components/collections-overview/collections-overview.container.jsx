import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors.js';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

/*
  Using compose from redux. Similar to:
  connect(mapStateToProps)(WithSpinner(CollectionsOverview))
*/
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;