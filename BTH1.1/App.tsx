// App.tsx
import React from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import PostComponent from "./src/components/PostComponent";
import { posts, Post } from "./src/assets/postData"; // Import dữ liệu và kiểu Post từ postsData.ts

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {posts.map((post: Post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: "#f0f0f0" },
});

export default App;
