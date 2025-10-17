import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Search, ChevronRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ExploreScreen() {
  const categories = [
    { id: 1, title: 'Sleep', sessions: 24, image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/14cafb43-31c2-46cf-bac7-91225366bbb3_3840w.jpg' },
    { id: 2, title: 'Stress', sessions: 18, image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f84193a5-2633-43fc-9d46-b7955ec06ffe_320w.jpg' },
    { id: 3, title: 'Focus', sessions: 15, image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8796db14-2421-4e83-9be8-7c00c6499faf_320w.webp' },
    { id: 4, title: 'Anxiety', sessions: 21, image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/585d9962-7d8c-43da-81c7-190f2e9dc7f2_3840w.jpg' },
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://cdn.pixabay.com/photo/2019/07/21/19/31/blue-flower-4353418_1280.jpg' }}
      style={styles.container}
      blurRadius={60}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)']}
        style={StyleSheet.absoluteFill}
      />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Explore</Text>

        <View style={styles.searchContainer}>
          <Search size={20} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search meditations..."
            placeholderTextColor="#6B7280"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <Image source={{ uri: category.image }} style={styles.categoryImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.8)']}
                  style={styles.categoryOverlay}
                />
                <View style={styles.categoryContent}>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                  <Text style={styles.categorySessions}>{category.sessions} sessions</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular This Week</Text>
            <TouchableOpacity>
              <ChevronRight size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <TouchableOpacity style={styles.popularCard}>
              <Image
                source={{ uri: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7834369-c819-4a24-a18b-55b2f3d5aee7_3840w.webp' }}
                style={styles.popularImage}
              />
              <Text style={styles.popularTitle}>Ocean Waves</Text>
              <Text style={styles.popularSubtitle}>15 min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popularCard}>
              <Image
                source={{ uri: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5bda7e82-7412-498e-85b2-cb664f33f3cf_3840w.jpg' }}
                style={styles.popularImage}
              />
              <Text style={styles.popularTitle}>Evening Calm</Text>
              <Text style={styles.popularSubtitle}>20 min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popularCard}>
              <Image
                source={{ uri: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d9f3e47-8c3f-4d18-9da7-384cbf14cdf3_320w.jpg' }}
                style={styles.popularImage}
              />
              <Text style={styles.popularTitle}>Rain Sounds</Text>
              <Text style={styles.popularSubtitle}>30 min</Text>
            </TouchableOpacity>
          </ScrollView>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    height: 48,
    color: '#E5E7EB',
    fontSize: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#E5E7EB',
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    height: 140,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  categoryContent: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  categorySessions: {
    fontSize: 12,
    color: '#D1D5DB',
  },
  horizontalScroll: {
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
  popularCard: {
    width: 160,
    marginRight: 16,
  },
  popularImage: {
    width: '100%',
    height: 160,
    borderRadius: 20,
    marginBottom: 12,
  },
  popularTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E5E7EB',
    marginBottom: 4,
  },
  popularSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
