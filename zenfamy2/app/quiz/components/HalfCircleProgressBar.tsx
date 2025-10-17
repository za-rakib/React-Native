import { colors } from '@/assets/lib';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const GaugeProgress = ({
  progress = 0.2,
  size = 200,
  strokeWidth = 20,
  color = colors.primaryButton,
  bgColor = '#ddeff1'
}) => {
  const radius = (size - strokeWidth) / 2;
  const centerX = size / 2;
  const centerY = size / 2;

  // Start at -135° (top-left), end at +135° (top-right)
  const startAngle = (5 * Math.PI) / 7;  // 225°
  const maxAngle = (7 * Math.PI) / 7;    // 315°
  const endAngle = startAngle + (Math.PI * progress*1.6); // 270° max

  const polarToCartesian = (cx:any, cy:any, r:any, angle:any) => {
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  const describeArc = (cx:any, cy:any, r:any, startAngle:any, endAngle:any) => {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';

    return [
      'M', start.x, start.y,
      'A', r, r, 0, largeArcFlag, 0, end.x, end.y
    ].join(' ');
  };

  const backgroundPath = describeArc(centerX, centerY, radius, startAngle, 208.3);
  const progressPath = describeArc(centerX, centerY, radius, startAngle, endAngle);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {/* Background arc (full 270°) */}
        <Path
          d={backgroundPath}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
          
        />
        <Text className='absolute top-[80px]  text-2xl text-center w-full font-bold text-[30px] estonBlue'>{progress*100}%</Text>
        {/* Progress arc */}
        <Path
          d={progressPath}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
        />
      </Svg>
      <Text className='text-lg font-semibold estonBlue -mt-9'>Overall Score</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GaugeProgress;
