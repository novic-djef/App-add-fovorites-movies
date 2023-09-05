import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../redux/action";
import { Text, View } from "react-native";

const SeriesDetails = ({ seriesId }) => {
  const dispatch = useDispatch();
  const seriesData = useSelector((state) => state.seriesData);

//   useEffect(() => {
//     dispatch(getSeries(seriesId));
//   }, [dispatch, seriesId]);

  return (
    <View>
      <Text>{seriesData}</Text>
      <Text>{seriesData}</Text>
      {/* Affichez d'autres détails de la série ici */}
    </View>
  );
};

export default SeriesDetails;
