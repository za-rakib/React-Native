import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Bell, ArrowRight, RotateCcw, Mic, Heart, BookOpen } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2016/05/18/17/59/leaf-1401140_1280.jpg' }}
      style={styles.container}
      blurRadius={60}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)']}
        style={StyleSheet.absoluteFill}
      />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/55c8ab75-5879-421e-82b3-fefaa1032d06_3840w.webp' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.greeting}>Good morning,</Text>
              <Text style={styles.username}>Sarah</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={20} color="#E5E7EB" />
          </TouchableOpacity>
        </View>

        <View style={styles.todayCard}>
          <Image
            source={{ uri: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e95522f1-23ec-480b-bdd5-36405197ab97_3840w.jpg' }}
            style={styles.todayImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.6)']}
            style={styles.todayImageOverlay}
          />
          <View style={styles.todayContent}>
            <View style={styles.todayHeader}>
              <View>
                <Text style={styles.todayLabel}>Today's Session</Text>
                <Text style={styles.todayTitle}>Morning Peace</Text>
                <Text style={styles.todaySubtitle}>Guided meditation • 15 min</Text>
              </View>
              <View style={styles.recommendedBadge}>
                <View style={styles.recommendedDot} />
                <Text style={styles.recommendedText}>Recommended</Text>
              </View>
            </View>
            <View style={styles.todayActions}>
              <TouchableOpacity style={styles.startButton}>
                <LinearGradient
                  colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)']}
                  style={StyleSheet.absoluteFill}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                />
                <View style={styles.startButtonInner}>
                  <Text style={styles.startButtonText}>Start</Text>
                  <ArrowRight size={16} color="#FFFFFF" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.repeatButton}>
                <RotateCcw size={16} color="#E5E7EB" />
                <Text style={styles.repeatButtonText}>Repeat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Collections</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.collectionsContainer}>
          <TouchableOpacity style={styles.collectionCard}>
            <Image
              source={{ uri: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7834369-c819-4a24-a18b-55b2f3d5aee7_320w.webp' }}
              style={styles.collectionImage}
            />
            <View style={styles.collectionContent}>
              <View style={styles.collectionInfo}>
                <Text style={styles.collectionTitle}>Sleep Sounds</Text>
                <Text style={styles.collectionSubtitle}>12 sessions • Relaxation</Text>
              </View>
              <View style={styles.collectionMeta}>
                <Mic size={16} color="#9CA3AF" />
                <Text style={styles.collectionDuration}>5-30 min</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.collectionCard}>
            <Image
              source={{ uri: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f84193a5-2633-43fc-9d46-b7955ec06ffe_320w.jpg' }}
              style={styles.collectionImage}
            />
            <View style={styles.collectionContent}>
              <View style={styles.collectionInfo}>
                <Text style={styles.collectionTitle}>Stress Relief</Text>
                <Text style={styles.collectionSubtitle}>8 sessions • Breathing</Text>
              </View>
              <View style={styles.collectionMeta}>
                <Heart size={16} color="#9CA3AF" />
                <Text style={styles.collectionDuration}>3-15 min</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.collectionCard}>
            <Image
              source={{ uri: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8796db14-2421-4e83-9be8-7c00c6499faf_320w.webp' }}
              style={styles.collectionImage}
            />
            <View style={styles.collectionContent}>
              <View style={styles.collectionInfo}>
                <Text style={styles.collectionTitle}>Focus Flow</Text>
                <Text style={styles.collectionSubtitle}>15 sessions • Productivity</Text>
              </View>
              <View style={styles.collectionMeta}>
                <BookOpen size={16} color="#9CA3AF" />
                <Text style={styles.collectionDuration}>10-25 min</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Sessions</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recentContainer}>
          <TouchableOpacity style={styles.recentCard}>
            <Image
              source={{ uri: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7834369-c819-4a24-a18b-55b2f3d5aee7_3840w.webp' }}
              style={styles.recentImage}
            />
            <View style={styles.recentContent}>
              <Text style={styles.recentTitle}>Ocean Waves</Text>
              <Text style={styles.recentTime}>Today, 7:30 AM • 15 min</Text>
              <View style={styles.streakBadge}>
                <View style={styles.streakDot} />
                <Text style={styles.streakText}>12 day streak</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recentCard}>
            <Image
              source={{ uri: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/585d9962-7d8c-43da-81c7-190f2e9dc7f2_3840w.jpg' }}
              style={styles.recentImage}
            />
            <View style={styles.recentContent}>
              <Text style={styles.recentTitle}>Body Scan</Text>
              <Text style={styles.recentTime}>Yesterday, 9:15 PM • 20 min</Text>
              <Text style={styles.recentLabel}>Before bed</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.recentCard}>
            <Image
              source={{ uri: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a03dbf4c-46f6-4c48-ac03-d65bc5c6fa63_3840w.jpg' }}
              style={styles.recentImage}
            />
            <View style={styles.recentContent}>
              <Text style={styles.recentTitle}>Breath Work</Text>
              <Text style={styles.recentTime}>Mar 30, 2:45 PM • 10 min</Text>
              <Text style={styles.recentLabel}>Midday reset</Text>
            </View>
          </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 16,
  },
  greeting: {
    fontSize: 16,
    color: '#E5E7EB',
    fontWeight: '300',
  },
  username: {
    fontSize: 16,
    color: '#9CA3AF',
    fontWeight: '300',
  },
  notificationButton: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 24,
  },
  todayImage: {
    width: '100%',
    height: 192,
  },
  todayImageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 192,
  },
  todayContent: {
    padding: 24,
  },
  todayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  todayLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  todayTitle: {
    fontSize: 24,
    color: '#F3F4F6',
    fontWeight: '500',
    marginTop: 4,
  },
  todaySubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  recommendedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    height: 32,
  },
  recommendedDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A5B4FC',
  },
  recommendedText: {
    fontSize: 12,
    color: '#A5B4FC',
    fontWeight: '500',
  },
  todayActions: {
    flexDirection: 'row',
    gap: 12,
  },
  startButton: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
  },
  startButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },
  repeatButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    paddingVertical: 12,
  },
  repeatButtonText: {
    color: '#E5E7EB',
    fontSize: 14,
    fontWeight: '500',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E5E7EB',
  },
  viewAll: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  collectionsContainer: {
    gap: 12,
    marginBottom: 32,
  },
  collectionCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
    overflow: 'hidden',
  },
  collectionImage: {
    width: 80,
    height: 80,
  },
  collectionContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  collectionInfo: {
    flex: 1,
  },
  collectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#E5E7EB',
    marginBottom: 4,
  },
  collectionSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  collectionMeta: {
    alignItems: 'flex-end',
    gap: 4,
  },
  collectionDuration: {
    fontSize: 12,
    color: '#6B7280',
  },
  recentContainer: {
    gap: 12,
  },
  recentCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
    overflow: 'hidden',
  },
  recentImage: {
    width: '50%',
    height: 128,
  },
  recentContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  recentTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#E5E7EB',
    marginBottom: 4,
  },
  recentTime: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 8,
  },
  recentLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  streakDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A5B4FC',
  },
  streakText: {
    fontSize: 12,
    color: '#A5B4FC',
    fontWeight: '500',
  },
});
