import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
interface Post {
  avatar: string;
  userName: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
}

const PostComponent = ({ post }: { post: Post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(post.comments);
  const [shared, setShared] = useState(post.shares);

  const handleLikePress = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleCommentPress = () => {
    setComments(comments + 1);
  };

  const handleSharePress = () => {
    setShared(shared + 1);
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{post.userName}</Text>
      </View>
      <Text style={styles.content}>{post.content}</Text>
      <Image source={{ uri: post.image }} style={styles.postImage} />

      {/* info */}
      <View style={styles.interactionBar}>
        <Text style={styles.info}>{likes} Likes</Text>

        <Text style={styles.info}>{comments} Comments</Text>

        <Text style={styles.info}>{shared} Shares</Text>
      </View>

      {/* btn */}
      <View style={styles.interactionBar}>
        <TouchableOpacity onPress={handleLikePress} style={styles.Btn}>
          <AntDesign
            name={liked ? "like1" : "like2"}
            size={24}
            color={liked ? "blue" : "black"}
          />
          <Text style={liked ? styles.liked : styles.normal}>Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={handleCommentPress}>
          <AntDesign name="message1" size={24} color="black" />
          <Text style={styles.normal}>Comments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Btn} onPress={handleSharePress}>
          <AntDesign name="sharealt" size={24} color="black" />
          <Text style={styles.normal}>Shares</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: { padding: 10, marginBottom: 10, backgroundColor: "#fff" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  userName: { fontWeight: "bold" },
  content: { marginBottom: 10 },
  postImage: { width: "100%", height: 200 },
  interactionBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  Btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  liked: { color: "blue", fontWeight: "bold", fontSize: 16, marginLeft: 5 },
  normal: { color: "gray", fontSize: 16, marginLeft: 5 },
  info: { color: "gray", fontSize: 12 },
});

export default PostComponent;
