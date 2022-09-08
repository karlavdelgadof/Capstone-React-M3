// import React from 'react';
// import { useSelector } from 'react-redux';
// import '../CSS/Collection.css';

// const CollectionDetails = () => {
//   const collection = useSelector((state) => state.collection);
//   console.log(collection)

//   return (
//     <div className="comics-section">
//       <div className="marvel-comics-title">
//         <div>
//         <img src={collection.large_image_url} className="marvel-comics-image"/>
//         </div>
//         <div className="marvel-comics-text">
//           <p>{collection.name}</p>
//           <p>Volume: {collection.stats.total_volume}</p>
//           <p>{collection.description}</p>
//         </div>
//       </div>
//       <div className="character-comics">
//         <div className="comics-title">All comics</div>
//         <div className="character-status">1</div>
//         <div className="character-status">2</div>
//         <div className="character-status">3</div>
//         <div className="character-status">4</div>
//         <div className="character-status">5</div>
//         <div className="character-status">6</div>
//       </div>
//     </div>
//   );
// };

// export default CollectionDetails;