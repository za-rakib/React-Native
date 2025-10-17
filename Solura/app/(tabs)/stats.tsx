import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function StatsScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const statsData = {
    week: { totalMin: 142, sessions: 7, streak: 12 },
    month: { totalMin: 620, sessions: 28, streak: 12 },
    year: { totalMin: 7440, sessions: 312, streak: 12 },
  };

  const currentStats = statsData[selectedPeriod as keyof typeof statsData];

  return (
    <ImageBackground
      source={{ uri: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/996d9d29-d85d-4c45-a1b1-c04bb1479b82_3840w.webp' }}
      style={styles.container}
      blurRadius={60}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)']}
        style={StyleSheet.absoluteFill}
      />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Your Progress</Text>

        <View style={styles.statsCard}>
          <View style={styles.statsHeader}>
            <View>
              <Text style={styles.statsLabel}>Weekly Stats</Text>
              <Text style={styles.statsTitle}>Your Progress</Text>
            </View>
            <View style={styles.badge}>
              <View style={styles.badgeDot} />
              <Text style={styles.badgeText}>On Track</Text>
            </View>
          </View>

          <View style={styles.chartPlaceholder}>
            <View style={styles.barContainer}>
              {[12, 15, 18, 20, 25, 22, 28].map((height, index) => (
                <View key={index} style={styles.barWrapper}>
                  <View style={[styles.bar, { height: height * 3 }]}>
                    <LinearGradient
                      colors={['#818CF8', 'rgba(129, 140, 248, 0.3)']}
                      style={StyleSheet.absoluteFill}
                    />
                  </View>
                  <Text style={styles.barLabel}>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{currentStats.totalMin}</Text>
              <Text style={styles.statLabel}>Total min</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{currentStats.sessions}</Text>
              <Text style={styles.statLabel}>Sessions</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{currentStats.streak}</Text>
              <Text style={styles.statLabel}>Day streak</Text>
            </View>
          </View>

          <View style={styles.periodSelector}>
            <View style={styles.periodButtons}>
              {['week', 'month', 'year'].map((period) => (
                <TouchableOpacity
                  key={period}
                  style={[
                    styles.periodButton,
                    selectedPeriod === period && styles.periodButtonActive,
                  ]}
                  onPress={() => setSelectedPeriod(period)}>
                  <Text
                    style={[
                      styles.periodButtonText,
                      selectedPeriod === period && styles.periodButtonTextActive,
                    ]}>
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsGrid}>
            <View style={styles.achievementCard}>
              <View style={styles.achievementIcon}>
                <Text style={styles.achievementEmoji}>🔥</Text>
              </View>
              <Text style={styles.achievementTitle}>12 Day Streak</Text>
              <Text style={styles.achievementSubtitle}>Keep it going!</Text>
            </View>
            <View style={styles.achievementCard}>
              <View style={styles.achievementIcon}>
                <Text style={styles.achievementEmoji}>⭐</Text>
              </View>
              <Text style={styles.achievementTitle}>50 Sessions</Text>
              <Text style={styles.achievementSubtitle}>Milestone reached</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>This Week</Text>
          <View style={styles.weekCard}>
            <View style={styles.weekRow}>
              <Text style={styles.weekLabel}>Daily average</Text>
              <Text style={styles.weekValue}>20 min</Text>
            </View>
            <View style={styles.weekRow}>
              <Text style={styles.weekLabel}>Longest session</Text>
              <Text style={styles.weekValue}>30 min</Text>
            </View>
            <View style={styles.weekRow}>
              <Text style={styles.weekLabel}>Favorite time</Text>
              <Text style={styles.weekValue}>Morning</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B4B',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#F3F4F6',
    marginBottom: 24,
  },
  statsCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  statsLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
    marginBottom: 4,
  },
  statsTitle: {
    fontSize: 24,
    color: '#E5E7EB',
    fontWeight: '500',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A5B4FC',
  },
  badgeText: {
    fontSize: 12,
    color: '#A5B4FC',
    fontWeight: '500',
  },
  chartPlaceholder: {
    height: 160,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    justifyContent: 'flex-end',
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 100,
  },
  barWrapper: {
    alignItems: 'center',
    gap: 8,
  },
  bar: {
    width: 24,
    borderRadius: 8,
    overflow: 'hidden',
  },
  barLabel: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    color: '#E5E7EB',
    fontWeight: '500',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  periodSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  periodButtons: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 4,
    gap: 4,
  },
  periodButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  periodButtonActive: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  periodButtonText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  periodButtonTextActive: {
    color: '#E5E7EB',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#E5E7EB',
    marginBottom: 16,
  },
  achievementsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  achievementCard: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  achievementEmoji: {
    fontSize: 24,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E5E7EB',
    marginBottom: 4,
  },
  achievementSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  weekCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    padding: 20,
    gap: 16,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weekLabel: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  weekValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E5E7EB',
  },
});
